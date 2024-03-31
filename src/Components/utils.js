const timestamp2DateTime = (timestamp) => {
    // console.log(timestamp);
    return timestamp;
    // let date;
    // if (!timestamp || timestamp.toString() === "0") {
    //     return "N/A";
    // } else {
    //     date = new Date(timestamp * 1000).toUTCString();
    // }
    // return date;
};

const tags = [
    "OTHER", "EDUCATION", "HEALTH", "FINANCE", "BUSINESS", "FAMILY", "RANDOM"
];

const getTagName = (tagId) => {
    return tags[tagId]
}




export { timestamp2DateTime, tags, getTagName };
