import React, { useRef } from "react";
import { useMemo, useState, useEffect } from "react";

function RenderList({ Data }) {
    const [is_visible, setIs_visible] = useState(true)
    const [top_index, setTop_index] = useState(0)
    const [bottom_index, setBottom_index] = useState(10);
    const [visibleItems, setVisibleItems] = useState(Data.slice(top_index, bottom_index + 1))
    
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIs_visible(entry.Intersecting)
            }, {

        })
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [is_visible])

    useEffect(() => {
        setBottom_index(bottom_index + 5);
        setTop_index(top_index + 5);
        const new_items=[...Data.slice(top_index, bottom_index + 1)]
        setVisibleItems(new_items);
    }, [is_visible])

    console.log(visibleItems)
    return (
        <div>
            <p>image with random url </p>
            {
                Data.slice(top_index, bottom_index).map((id, index) =>
                    <div key={index} ref={index == top_index + 2 ? ref : null}>
                        <img src={`https://picsum.photos/id/${id}/200/300`} alt={`image with id ${index}`}/>
                    </div>
                )
            }

        </div>
    )


}
export default RenderList