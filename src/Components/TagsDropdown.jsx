import { useState, useEffect } from 'react';

const TagsDropdown = ({ contract, tag, setTag }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const getTags = async () => {
            const fetchedTags = contract ? await contract.getTags() : [];
            setTags(fetchedTags);
        };

        const fetchData = async () => {
            await getTags();
        };
        fetchData();
    }, [contract]);

    return (
        <div className='mt-2'>
            <div className='text-sm'>Tags</div>
            <select id='tags' className='p-1 rounded-lg bg-customCactus-400' value={tag} onChange={(e) => setTag(+e.target.value)}>
                {tags.map((tag, index) => (
                    <option key={index} value={index}>{tag}</option>
                ))}
            </select>
        </div>
    );
};

export default TagsDropdown;
