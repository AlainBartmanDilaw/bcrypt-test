const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainTextPassword1 = "DFGh5546*%^__90";

async function f() {

    let hash1 = ""
    let hash2 = ""

    await bcrypt
        .hash(plainTextPassword1, saltRounds)
        .then(hash=>{
            console.log(`Hash1: ${hash}`);
            hash1 = hash;
        })
        .catch(err=>console.error(err.message));

    await bcrypt
        .hash(plainTextPassword1, saltRounds)
        .then(hash=>{
            console.log(`Hash2: ${hash}`);
            hash2 = hash;
        })
        .catch(err=>console.error(err.message));

    await bcrypt
        .compare(plainTextPassword1, hash1)
        .then(res=>{
            console.log(`plain versus hash1 ${res}`);
        })
        .catch(err=>console.error(err.message));

    await bcrypt
        .compare(plainTextPassword1, hash2)
        .then(res=>{
            console.log(`plain versus hash2 ${res}`);
        })
        .catch(err=>console.error(err.message));

    await bcrypt
        .compare(hash1, hash2)
        .then(res=>{
            console.log(`hash1 (${hash1}) versus hash2 (${hash2})`, res);
        })
        .catch(err=>console.error(err.message));
}

f()
