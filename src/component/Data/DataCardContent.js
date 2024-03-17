// ContentCard.js
import React from 'react';
import CardContent from '../Card/CardContentComponent';

const ContentCard = () => {
    // Example data array with image and createdAt properties
    const cardData = [
        { id: 1, image: '/image/content/coreit.png', createdAt: '16-May-2023' },
        { id: 2, image: '/image/content/coreit.png', createdAt: '22-June-2023' },
        { id: 3, image: '/image/content/coreit.png', createdAt: '10-August-2023' },
        { id: 4, image: '/image/content/coreit.png', createdAt: '10-August-2023' },
        { id: 5, image: '/image/content/coreit.png', createdAt: '10-August-2023' },
        { id: 6, image: '/image/content/coreit.png', createdAt: '10-August-2023' },
        { id: 7, image: '/image/content/coreit.png', createdAt: '10-August-2023' },
        { id: 8, image: '/image/content/coreit.png', createdAt: '10-August-2023' },
    ];

    return (
        <div className="my-4 grid grid-cols-4 gap-6">
            {cardData.map(card => (
                <CardContent key={card.id} image={card.image} createdAt={card.createdAt} />
            ))}
        </div>
    );
};

export default ContentCard;
