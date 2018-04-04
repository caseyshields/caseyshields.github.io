let fs = require('fs');

fs.readFile( 'public/FK6/ReadMe', 
    {encoding : 'ascii'},
    function(error, data) {
        if (error) throw error;

        let lines = data.split('\n');
        
        for (let line of lines )
            console.log(line);
    }
);

// const FK6_COLUMNS = 843;

// fs.readFile( 'public/FK6/fk6_1.dat', function( error, data) {
//     if (error) throw error;
//     const FK6_ROWS = data.length / FK6_COLUMNS;

//     if(Buffer.isBuffer(data)) {
//         console.log( FK6_COLUMNS+','+FK6_ROWS );
//     }
// } );