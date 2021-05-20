import React, { Fragment } from 'react';
import BioPic from '../../assets/bio-pic5.jpg';

const About = () => (
    <div className="container py-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <p>
                    Juan Carlos Aliaga Del Bosque is a Peruvian composer residing in New York City. His work is strongly influenced by his interest in philosophy, as he has sought for the idea of the most human path to shape music. Aliaga del Bosque is now focused on expanding his musical language through writing chamber music that merges Peruvian musical genres and contemporary classical music. He received his bachelor’s degree in composition at Conservatorio Nacional de Musica in Lima, Peru where he studied composition with Nilo Velarde and Enrique Iturriaga and earned his Master of Music degree from Mannes School of Music under the guidance of composers Paul Moravec and Lowell Liebermann.
                </p>

                <p>
                    He also studied violin with Frank Arias (Cuba/Peru) and Federico Britos (Uruguay/US) and holds a bachelor’s degree in physics from Pontificia Universidad Catolica Del Peru. As a performer, he has been part of the orchestra of Conservatorio Nacional de Musica, the baroque ensemble and the jazz band of the same institution, The New School Community Orchestra, the Cross Genre Ensemble at Mannes. Juan Carlos has also been part of different jazz groups and has participated in recordings of different Peruvian bands. He was part of the Alternative/Indie band Gris Volta, which was included in The Guardian article "December's best music across the MAP".
                </p>
            </div>
            <div className="col-12 col-md-6 pt-4 pt-lg-0">
                <div className="w-75 mx-auto">
                    <img src={BioPic} alt="Juan Carlos Aliaga Del Bosque" className="img-fluid mb-2" />
                    <p className="text-end text-muted small">ph: Cherry Lowrie</p>
                </div>
            </div>
        </div>
    </div>
);

export default About;
