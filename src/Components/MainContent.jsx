import Favorites from "./Favorites";
import MyVault from "./MyVault";
import Recents from "./Recents";
import Settings from "./Settings";
import SignOut from "./SignOut";
import Storage from "./Storage";
import Tags from "./Tags";
import Trash from "./Trash";
import SharedWithMe from "./SharedWithMe";

const MainContent = ({ active, account, contract, files, setFiles }) => {
    const components = {
        1: <MyVault files={files} setFiles={setFiles} account={account} contract={contract} />,
        2: <SharedWithMe active={active} files={files} setFiles={setFiles} account={account} contract={contract} />,
        3: <Recents files={files} setFiles={setFiles} account={account} contract={contract} />,
        4: <Favorites files={files} setFiles={setFiles} account={account} contract={contract} />,
        5: <Tags />,
        6: <Storage />,
        7: <Trash files={files} setFiles={setFiles} account={account} contract={contract} />,
        8: <Settings />,
        9: <SignOut />
    };

    return (
        <>
            {components[active]}

        </>
    );
}

export default MainContent;
