const helloWorld = artifacts.require("helloWorld")

contract("helloWorld", ()=> {
  it("should return "Celo" as the name", async ()=>{
    let instance = await helloWorld.deploy()
    let name = await instance.getName()
    assert.equal(name, "Celo")

  })
})
