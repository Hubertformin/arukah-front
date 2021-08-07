import { Button, Modal, Form, Input, Select, message } from "antd";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Footer from "../../components/footer/footer";
import MetaTags from "../../components/meta-tags";
import Toolbar from "../../components/toolbar/toolbar";
import '../../styles/Event.module.scss';
import { getDateString } from "../../utils/functions";

function Event({event, locale, events}) {
    const [form] = Form.useForm();
    // console.log(event);

    const [isVModalvisible, setIsVModalvisible] = useState(false);
    const [isSavingVolunteer, setIsSavingVolunteer] = useState(false);

    const {t} = useTranslation('event');

    const saveVolunteer = async () => {
        // setIsSavingVolunteer(true); // show loading... 
        // validate form
        form.validateFields()
            .then(() => {
                const req_body = {
                    event, 
                    volunteer: form.getFieldsValue()
                }
        
                axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}/events/${event._id}/volunteers`, form.getFieldsValue())
                .then(() => {
                    form.resetFields();
                    message.success("Thank you for registering, You will be notified sooner");
                })
                .catch((e) => {
                    console.error(e);
                    message.warn("There was an error submitting your request, please try again later");
                })
                .finally(() => {
                    setIsSavingVolunteer(false);
                })
            }).catch(err => console.error(err));
    }

    return(
        <>
        <MetaTags title={event.title} />
        <Toolbar sticky={false} />
        <section id="banner">
            <div className="dark-overlay">
                <div className="wrapper">
                    <p className="section-label">{event.title}</p>
                </div>
            </div>
        </section>

        <aside id="page_body" className="wrapper event-body">
            <div className="row">
                <div className="col-sm-8">
                    <div className="tile">
                        <div className="img-cover">
                                <img src={process.env.NEXT_PUBLIC_API_URL + event?.CoverPhoto?.url}  alt="" />
                        </div>
                        <div className="action">
                            <div className="meta">
                                <ul>
                                    <li><FiCalendar />&nbsp;{getDateString(event?.StartDate, locale)}</li>
                                    <li><FiMapPin />&nbsp;{event?.Location}</li>
                                </ul>
                            </div>
                            <div className="buttons">
                                <button className="btn">{t('donate')}</button>
                            </div>
                        </div>
                    </div>

                    <section className="article">
                        <h1 className="title">
                            {event?.title}
                        </h1>

                        <div className="content" dangerouslySetInnerHTML={{__html: event?.description}}></div>
                    </section>
                </div>
                <div className="col-sm-4">
                <div className="upcoming-section">
                    <h1 className="section-title">{t('upcomingEvents')}</h1>
                    {
                        events.map(evt => {
                            return(
                                <div key={'evt-card' + evt._id} className="upcoming-evt-card">
                                    <img key={'evt-img' + evt._id} src={process.env.NEXT_PUBLIC_API_URL + evt?.CoverPhoto?.url} alt="" />
                                    <div key={'evt-meta' + evt._id} className="meta-info">
                                        <div key={'evt-dte' + evt._id} className="date"><FiCalendar />&nbsp;{getDateString(evt?.StartDate, locale)}</div>
                                        <div key={'evt-loc' + evt._id} className="location"><FiMapPin />&nbsp;{evt?.Location}</div>
                                    </div>
                                    <h2 key={'evt-title' + evt._id} className="title">{evt.title}</h2>
                                    <p key={'evt-desc' + evt._id} className="description" dangerouslySetInnerHTML={{__html: event?.description.slice(0, 100) + '..'}}></p>
                                    <Link key={'evt-link' + evt._id} href={`/events/${evt.id}`}>
                                        <a key={'evt-a' + evt._id}>{t('learnMore')}</a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>

            <div className="help-card">
                <h1 className="title">{t('interested')}</h1>
                <div className="actions flex space-between">
                    <button className="btn mr-4">{t('donate')}</button>
                    <button onClick={() => setIsVModalvisible(true)} className="btn-outline">{t('becomeVolunteer')}</button>
                </div>
            </div>
        </aside>

        <Footer />

        <Modal
          visible={isVModalvisible}
          width={1000}
          title={t('becomeVolunteer')}
          onOk={saveVolunteer}
          onCancel={() => setIsVModalvisible(false)}
          footer={[
            <Button key="back" onClick={() => setIsVModalvisible(false)}>
              {t('form.cancel')}
            </Button>,
            <Button key="submit" type="primary" loading={isSavingVolunteer} onClick={saveVolunteer}>
              {t('form.submit')}
            </Button>
          ]}
        >
          <Form 
                form={form}
                layout="vertical"
            >
                <div className="row">
                    <div className="col-sm-6">
                        <Form.Item 
                            name="name" 
                            required={true} 
                            label={t('form.name')}
                            rules={[{required: true, message: t('form.nameError')}]}
                        >
                            <Input placeholder={t('form.name')} size="large" />
                        </Form.Item>
                    </div>
                    <div className="col-sm-6">
                        <Form.Item 
                            name="email"
                            label={t('form.email')}
                        >
                            <Input placeholder={t('form.email')} size="large" />
                        </Form.Item>
                    </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Item 
                                    name="phoneNumber" 
                                    required={true} 
                                    label={t('form.phoneNumber')}
                                    rules={[{required: true, message: t('form.phoneError')}]}
                                >
                                    <Input placeholder={t('form.phoneNumber')} prefix={"+237"} size="large" />
                                </Form.Item>
                            </div>
                            <div className="col-sm-6">
                                <Form.Item name="gender" label={t('form.gender')}>
                                    <Select defaultValue="Female" size="large">
                                        <Select.Option value="Female">{t('form.female')}</Select.Option>
                                        <Select.Option value="Male">{t('form.male')}</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Item name="age" label={t('form.age')}>
                                    <Input placeholder={t('form.agePlaceholder')} size="large" />
                                </Form.Item>
                            </div>
                            <div className="col-sm-6">
                                <Form.Item name="address" label={t('form.address')}>
                                    <Input placeholder={t('form.address')} size="large" />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
        </Modal>
        </>
    );
}

export async function getServerSideProps({params, locale}) {
    let event, events;
    const isoDate = new Date().toISOString();
    try {
        // get event by Id
        const _event = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/${params.eventId}?_locale=${locale}`);
        event = _event.data
        // console.log(event);
        const _events = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events?StartDate_gt=${isoDate}&_sort=StartDate:ASC&_locale=${locale}&_limit=2`);
        events = _events.data;

    } catch (error) {
       console.log(error); 
       event = {};
       events = [];
    }

    return {
        props: {
         ...(await serverSideTranslations(locale, ['toolbar', 'event', 'footer'])),
         locale,
         event,
         events
        }
    }
}

export default Event;