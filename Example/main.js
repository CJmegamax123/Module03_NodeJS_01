// Operations: Object Access, Invocation
console.log("What's your name?");

// Operations: Oject Access, Invocation, Callback
process.stdin.on('data', function(data) {

    // Operations: Declaration, Assignment
    const name = data.toString().trim();
    
    // Operations: Object Access, Invocation, String Concatenation
    console.log(`Hello, ${name}!`);

});