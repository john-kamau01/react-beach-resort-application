import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: "Odio ut sem nulla pharetra diam sit. Arcu risus quis varius quam quisque."
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: "Odio ut sem nulla pharetra diam sit. Arcu risus quis varius quam quisque."
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: "Odio ut sem nulla pharetra diam sit. Arcu risus quis varius quam quisque."
            },
            {
                icon: <FaBeer />,
                title: 'strong beer',
                info: "Odio ut sem nulla pharetra diam sit. Arcu risus quis varius quam quisque."
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title="services" />
                <div className='services-center'>
                    {this.state.services.map((service, index)=>{
                        return (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        ); 
    }
}
