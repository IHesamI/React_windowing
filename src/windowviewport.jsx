import React, { useRef } from "react";
import { useState, useEffect } from "react";

function RenderList({ Data }) {

    const [visibleItems, setVisibleItems] = useState([]); // This Array holds the images the are in viewport
    const scrollRef = useRef(null); // refrence object for elements Observer

    useEffect(() => {
        // create an observer object that 
        // changes visible items 
        const observer = new IntersectionObserver(
            (entries) => {
                // only the visible items are hold 
                const visible = entries.filter((entry) => entry.isIntersecting).map((entry) => Number(entry.target.dataset.index));
                if (visible.length!=visibleItems.length)
                    setVisibleItems(visible);
            }, { threshold: 0 });

        // list of items in DOM for observing
        const itemsList = scrollRef.current.children[1];

        // iterate through list for observing
        for (let i = 0; i < itemsList.children.length; i++) {
            const item = itemsList.children[i];
            item.dataset.index = i;
            observer.observe(item);
        }
        // clean up function before re-render
        return () => {
            observer.disconnect();
        };
    }, [visibleItems]);
    console.log(visibleItems)
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