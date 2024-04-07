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

const formatFileSize = (bytes) => {
    if (bytes < 1024) {
        return bytes + " bytes";
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
};


export { timestamp2DateTime, tags, getTagName, formatFileSize };
