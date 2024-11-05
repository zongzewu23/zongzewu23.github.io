
// App.js
import React from 'react';
import Header from './Header';
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card';

function App() {
    return (
        <div className="flex flex-col items-center space-y-8 p-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <Header />

            {/* 3D Card */}
            <CardContainer>
                <CardBody>
                    <CardItem className="bg-blue-500 p-8 text-white rounded-lg shadow-lg" rotateX={10} rotateY={10} translateZ={20}>
                        <h1 className="text-3xl font-bold">3D Interactive Card</h1>
                        <img
                            src="/pics/awardpic.jpg" // 从 public 文件夹引用图片
                            alt="3D card image"
                            className="mt-4 rounded-lg shadow-md"
                        />
                        <p className="mt-4">This card rotates in 3D when you hover over it!</p>
                    </CardItem>
                </CardBody>
            </CardContainer>

        </div>
    );
}

export default App;



