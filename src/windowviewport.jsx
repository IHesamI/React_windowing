import React, { useRef } from "react";
import { useMemo, useState, useEffect } from "react";

function RenderList({ Data }) {

    const [visibleItems, setVisibleItems] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => Number(entry.target.dataset.index));
                // console.log('isvisiblr', visible)
                setVisibleItems(visible);
            }, { threshold: 0 });
        const itemsList = scrollRef.current.children[1];

        for (let i = 0; i < itemsList.children.length; i++) {
            const item = itemsList.children[i];
            item.dataset.index = i;
            observer.observe(item);
        }
        // console.log(itemsList.children[5]);
        return () => {
            observer.disconnect();
        };
    }, [visibleItems]);

    return (
        <div
            ref={scrollRef}>
            <p>image with random url </p>
            <div
                style={{ width: '250', height: '3000' }}>
                {
                    Data.map((id, index) =>
                        <div
                            style={{ height: '300px' }}
                            key={index}>
                            {
                                visibleItems.includes(index) ? < img src={`https://picsum.photos/id/${id}/250/300`} alt={`image with id ${index}`} /> : <div style={{ height: `300px` }} />}
                        </div>
                    )
                }
            </div>

        </div>
    )


}
export default RenderList