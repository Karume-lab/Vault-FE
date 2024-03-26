import MyVault from "./MyVault";
const MainContent = ({ active, account, contract, files, setFiles }) => {
    const components = {
        "My Vault": <MyVault files={files} setFiles={setFiles} account={account} contract={contract} />,
    };

    return (
        <>
            {components[active]}
        </>
    );
}

export default MainContent;
