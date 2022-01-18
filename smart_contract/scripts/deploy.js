const main = async ()=> 
{
  const Transaction = await hre.ethers.getContractFactory('Transaction')
  const transaction = await Transaction.deploy("Hello, Hardhat!");

  await transaction.deployed();

  console.log('Transaction deployed to:', transaction.address)
}

const runMain = async ()=>
{
  try 
  {
    await main();
    procces.exit(0);
  } catch (error) 
  {
    console.error(error);
    procces.exit(1);  
  }
}

runMain();