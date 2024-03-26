import { useEffect } from "react";
import Favorites from "./Favorites";
import MyVault from "./MyVault";
import Recents from "./Recents";
import Settings from "./Settings";
import Share from "./Share";
import SignOut from "./SignOut";
import Storage from "./Storage";
import Tags from "./Tags";
import Trash from "./Trash";

const MainContent = ({ active, account, contract, files, setFiles }) => {
    const components = {
        "My Vault": <MyVault files={files} setFiles={setFiles} account={account} contract={contract} />,
        "Share": <Share />,
        "Recents": <Recents />,
        "Favorites": <Favorites />,
        "Tags": <Tags />,
        "Storage": <Storage />,
        "Trash": <Trash />,
        "Settings": <Settings />,
        "Sign Out": <SignOut />
    };

    return (
        <>
            {components[active]}
        </>
    );
}

export default MainContent;
