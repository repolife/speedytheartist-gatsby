import React, { useEffect, useState } from 'react'
import { RootElement } from '@components/App/RootElement/RootElement'
import { SEO } from '@components/SEO/SEO'
import { Loader } from '@components/Loader/Loader'
import '@style/events.css'

export const Events = ({}) => {
    const [isLoading, setIsLoading] = useState(true)
    const script =
        typeof window !== 'undefined' ? document.getElementById('bw') : null

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 1000)
        return () => {
            clearTimeout()
        }
    }, [])

    useEffect(() => {
        if (!isLoading) return
        const scriptTag = document.createElement('script')

        scriptTag.src = 'https://widgetv3.bandsintown.com/main.min.js'
        scriptTag.async = true
        document.body.appendChild(scriptTag)

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [isLoading])

    return (
        <RootElement>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <a
                        className="bit-widget-initializer"
                        data-artist-name="id_62186"
                        data-background-color="rgba(0,0,0,1)"
                        data-separator-color="#DDDDDD"
                        data-text-color="rgba(238,231,231,1)"
                        data-font="Helvetica"
                        data-auto-style="true"
                        data-button-label-capitalization="capitalize"
                        data-header-capitalization="undefined"
                        data-location-capitalization="capitalize"
                        data-venue-capitalization="capitalize"
                        data-display-local-dates="true"
                        data-local-dates-position="tab"
                        data-display-past-dates="false"
                        data-display-details=""
                        data-display-lineup=""
                        data-display-start-time=""
                        data-social-share-icon="true"
                        data-display-limit="all"
                        data-date-format="MMM. D, YYYY"
                        data-date-orientation="horizontal"
                        data-date-border-color="#9B9B9B"
                        data-date-border-width="1px"
                        data-date-capitalization="undefined"
                        data-date-border-radius="10px"
                        data-event-ticket-cta-size="medium"
                        data-event-custom-ticket-text="undefined"
                        data-event-ticket-text="TICKETS"
                        data-event-ticket-icon="true"
                        data-event-ticket-cta-text-color="#FFFFFF"
                        data-event-ticket-cta-bg-color="#9B9B9B"
                        data-event-ticket-cta-border-color="#9B9B9B"
                        data-event-ticket-cta-border-width="0px"
                        data-event-ticket-cta-border-radius="4px"
                        data-sold-out-button-text-color="#FFFFFF"
                        data-sold-out-button-background-color="#9B9B9B"
                        data-sold-out-button-border-color="#9B9B9B"
                        data-sold-out-button-clickable="true"
                        data-event-rsvp-position="left"
                        data-event-rsvp-cta-size="medium"
                        data-event-rsvp-only-show-icon="undefined"
                        data-event-rsvp-text="REMIND ME"
                        data-event-rsvp-icon=""
                        data-event-rsvp-cta-text-color="#9B9B9B"
                        data-event-rsvp-cta-bg-color="#FFFFFF"
                        data-event-rsvp-cta-border-color="#9B9B9B"
                        data-event-rsvp-cta-border-width="1px"
                        data-event-rsvp-cta-border-radius="4px"
                        data-follow-section-position="top"
                        data-follow-section-alignment="center"
                        data-follow-section-header-text="Get updates on new shows, new music, and more."
                        data-follow-section-cta-size="medium"
                        data-follow-section-cta-text="FOLLOW"
                        data-follow-section-cta-icon="true"
                        data-follow-section-cta-text-color="#FFFFFF"
                        data-follow-section-cta-bg-color="#9B9B9B"
                        data-follow-section-cta-border-color="#9B9B9B"
                        data-follow-section-cta-border-width="0px"
                        data-follow-section-cta-border-radius="4px"
                        data-play-my-city-position="bottom"
                        data-play-my-city-alignment="Center"
                        data-play-my-city-header-text="Don’t see a show near you?"
                        data-play-my-city-cta-size="medium"
                        data-play-my-city-cta-text="REQUEST A SHOW"
                        data-play-my-city-cta-icon="true"
                        data-play-my-city-cta-text-color="#FFFFFF"
                        data-play-my-city-cta-bg-color="#9B9B9B"
                        data-play-my-city-cta-border-color="#9B9B9B"
                        data-play-my-city-cta-border-width="0px"
                        data-play-my-city-cta-border-radius="4px"
                        data-language="en"
                        data-layout-breakpoint="900"
                        data-app-id=""
                        data-affil-code=""
                        data-bit-logo-position="bottomRight"
                        data-bit-logo-color="#CCCCCC"
                        data-optin-font="undefined"
                        data-optin-text-color="undefined"
                        data-optin-bg-color="undefined"
                        data-optin-cta-text-color="undefined"
                        data-optin-cta-bg-color="undefined"
                        data-optin-cta-border-width="undefined"
                        data-optin-cta-border-radius="undefined"
                        data-optin-cta-border-color="undefined"
                    />
                </>
            )}
        </RootElement>
    )
}

export const Head = () => {
    return (
        <>
            {' '}
            <SEO title="Events page" />{' '}
        </>
    )
}

export default Events
