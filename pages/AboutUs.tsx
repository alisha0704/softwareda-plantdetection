// components/AboutUs.tsx
import React from 'react';
import Header from './components/Common/Header';

const AboutUs: React.FC = () => {
    return (
        <>
        <Header></Header>
        <div className="bg-slate-50">
        <div className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-serif text-center font-bold mb-4">About Us</h1>

            <p className="text-lg font-serif mb-4">Welcome to LeafSense, where cutting-edge technology meets
             a passion for plant health. At LeafSense, we're dedicated to revolutionizing the way
              we understand and care for our green companions.</p>
            <p className="text-lg font-serif mb-4">Our journey began with a simple question: 
            How can we use artificial intelligence to empower plant enthusiasts,
             farmers, and researchers alike? The answer led us to develop LeafSense,
              a groundbreaking leaf analysis system that combines the power of computer
               vision with machine learning.</p>
            <p className="text-lg font-serif mb-4">Driven by our commitment to sustainability and innovation,
             our team of experts has painstakingly crafted LeafSense to be a versatile tool for 
             plant species identification and disease detection. Whether you're a gardener looking
              to diagnose a sick plant or a scientist studying botanical diversity, LeafSense 
              provides invaluable insights at your fingertips.</p>
            <p className="text-lg font-serif mb-4">With LeafSense, you can explore the intricate details of plant
             leaves, uncovering the secrets hidden within each vein and pigment. Our user-friendly
              interface makes it easy for anyone, regardless of technical expertise, to harness 
              the full potential of our platform.</p>
            <p className="text-lg font-serif mb-4">Join us in our mission to nurture healthier ecosystems and 
            cultivate a greener future. Let LeafSense be your guide as we journey together, leaf by
             leaf, towards a world where every plant thrives.</p>
            <p className="text-lg font-serif">Discover the power of LeafSense today and unlock the potential of your plants.</p>
        </div>
        </div>
        </>
    );
}

export default AboutUs;
