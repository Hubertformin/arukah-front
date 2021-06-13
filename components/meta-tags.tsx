import React from 'react';
import {NextSeo} from "next-seo";

const LOGO = 'https://firebasestorage.googleapis.com/v0/b/biche-designs.appspot.com/o/images%2Fbiche-designs.png?alt=media&token=48305783-6af7-4bc6-bdd9-bea3b5f8a40d';

function MetaTags({title, description = "", imageUrl = LOGO}) {
    return(
        <NextSeo
            title={`${title} - Arukah Foundation`}
            description={description}
            canonical="https://www.arukahfoundation.com/"
            openGraph={{
                url: 'https://www.arukahfoundation.org',
                title,
                description,
                images: [
                    {
                        url: imageUrl,
                        width: 800,
                        height: 600,
                        alt: 'arukah foundation',
                    }
                ],
                site_name: 'Arukah Foundation',
            }}
        />
    )
}

export default MetaTags;