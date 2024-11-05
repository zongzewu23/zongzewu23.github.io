
// App.js
import React from 'react';
import Header from './Header';
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card';
import './styles.css';

function App() {
    return (
        <div className=" custom-background flex flex-col items-center space-y-8 p-6 min-h-screen">
           

            <div className="flex flex-row gap-6">
            {/* 3D Card */}
            <CardContainer >
            <CardBody className="w-64">
                    <CardItem className="bg-blue-500 p-8 text-white rounded-lg shadow-lg font-dancing" rotateX={10} rotateY={10} translateZ={20}>
                        <h1 className="text-3xl font-bold">Nice little sunflower</h1>
                        <img
                            src="/pics/sunflower.jpg" 
                            alt="3D card image"
                            className="mt-4 rounded-lg shadow-md"
                        />
                        <p className="mt-4">Why don't you smile like this, just because life sucks?</p>
                    </CardItem>
                </CardBody>

                </CardContainer>
                <CardContainer>
                <CardBody className="w-64">
                    <CardItem className="bg-blue-500 p-8 text-white rounded-lg shadow-lg font-dancing" rotateX={10} rotateY={10} translateZ={20}>
                        <h1 className="text-3xl font-bold">Nice little moonflower</h1>
                        <img
                            src="/pics/moonflower.jpg" 
                            alt="3D card image"
                            className="mt-4 rounded-lg shadow-md"
                        />
                        <p className="mt-4">This breathtaking purple flower is actually a bean plant, grown by my grandma</p>
                    </CardItem>
                </CardBody>
            </CardContainer>
            </div >
        </div>
    );
}

export default App;



