
import {
    createPublicClient,
    http,
} from 'viem';
import { goerli } from 'viem/chains';
import {DynamicWidget, useDynamicContext} from "@dynamic-labs/sdk-react-core";



const Home = () => {
    const { primaryWallet, } =
        useDynamicContext();

    const onClick = async () => {
        try {
            const publicClient = createPublicClient({
                transport: http('https://rpc.ankr.com/eth_goerli'),
                chain: goerli
            });
            const client =
                (await primaryWallet?.connector.getSigner());

            console.log(primaryWallet);

            let account, hash;
            account = client?.account;

            const txRequest = {
                account,
                chain: goerli,
                data: '0x1249c58b' as `0x${string}`,
                to: '0x85111DF47D97Cc1aB3e76889fCF08594d053E85d' as `0x${string}`,
            };
            hash = await client.sendTransaction(txRequest);

            const transaction = await publicClient.waitForTransactionReceipt(
                { hash }
            );


            console.log('minted!', hash);
        } catch (error) {
            console.error(error);
        }


    };

    return (
        <div
            className="min-h-screen relative flex align-center justify-end flex-col bg-home bg-contain bg-no-repeat bg-center">
            { primaryWallet && <button style={{'background': 'red'}}onClick={onClick}>Click here to Mint NFT</button> }
            <div className="mb-32 mx-auto">
            </div>
        </div>
    );
}

export default Home;