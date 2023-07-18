const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("This is a test for my kiratpal_contract", () => {
  let owner, addr1, kiratpal_contract, signer;

  before("Deploy the contract instance first", async () => {
    const kiratpal_contract = await ethers.getContractFactory("kiratpal_contract");
    kiratpal_contract = await kiratpal_contract.deploy();

    [owner, addr1] = await ethers.getSigners();
  });

  it("Should get the owner's name", async () => {
    const name = await kiratpal_contract.ownerName();
    assert.equal(name, "Kiratpal");
  });

  it("should get the owner's balance", async () => {
    const bal = await kiratpal_contract.ownerBal();
    const balance = await ethers.provider.getBalance(owner);
    assert.equal(bal, balance);
  });

  it("Should tranfer ether to the owner", async () => {
    const contractConnect = kiratpal_contract.connect(addr1);

    const transferTx = await contractConnect.transferOwner({
      value: ethers.parseEther("10"),
    });

    await expect(transferTx)
      .to.emit(kiratpal_contract, "Transaction")
      .withArgs("Transaction successfull!!");
  });

  it("Should get an error for 0 ethers", async () => {
    const contractConnect = kiratpal_contract.connect(addr1);

    await expect(
      contractConnect.transferOwner({
        value: ethers.parseEther("0"),
      })
    ).revertedWith("Amount should be more than 0");
  });
});
