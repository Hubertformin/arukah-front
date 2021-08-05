import {Form, Input, Select, Button, message} from "antd";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Footer from "../components/footer/footer";
import Toolbar from "../components/toolbar/toolbar";

function WorkWithUs() {
    const [form] = Form.useForm();
    const [isSaving, setIsSaving] = useState(false);
    // use translations
    const {t} = useTranslation('work-with-us');

    const saveVolunteer = (payload) => {
        setIsSaving(true); // show loading... 

        axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/volunteers`, payload)
        .then(() => {
            form.resetFields();
            message.success("Thank you for registering, You will be notified sooner");
        })
        .catch((e) => {
            console.error(e);
            message.warn("There was an error submitting your request, please try again later");
        })
        .finally(() => {
            setIsSaving(false);
        })
    }

    function onSaveVolunteer() {
        console.log(form.getFieldsValue())
        saveVolunteer(form.getFieldsValue());
    }
    
    return(
        <>
            <Toolbar sticky={false} />
            <section id="banner">
                <div className="dark-overlay">
                    <div className="wrapper">
                        <p className="section-label">{t('workWithUs')}</p>
                    </div>
                </div>
            </section>
            <section id="page_body" className="wrapper py-16 md:py-24">
                <div id="volunteer">
                    <h1 className="text-4xl font-bold">{t('volunteer')}</h1>
                    <div className="desc text-xl mb-10">{t('description')}</div>
                    <Form 
                        form={form}
                        layout="vertical"
                        onFinish={onSaveVolunteer}
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

                        <div className="row">
                            <div className="col-sm-6">
                                <Button loading={isSaving} htmlType="submit" type="primary" size="large">{t('form.submit')}</Button>
                            </div>
                        </div>
                    </Form>
                </div>

                {/* <div id="career">
                    <h1 className="text-4xl">Careers</h1>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto, 
                        fuga ullam quas quam modi doloremque dignissimos libero voluptas facere aspernatur! 
                        Exercitationem dolores, quo neque odio et vel doloremque beatae!
                    </div>
                </div> */}
            </section>
            <Footer />
        </>
    );
}
export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['toolbar', 'work-with-us', 'footer'])),
        // Will be passed to the page component as props
      },
    };
}
export default WorkWithUs;