let fs = require('fs');

fs.readFile( 'public/FK6/ReadMe', 
    {encoding : 'ascii'},
    function(error, data) {
        if (error) throw error;

        let lines = data.split('\n');
        
        // find fk6_1 metadata
        let HEADER = 'Byte-by-byte Description of file: fk6_1.dat';
        let n = 0; //line = '';
        while (n < lines.length) {
            if (lines[n] == HEADER)
                break;
            else n++;
        }

        // read column names
        n+=2;
        let names = lines[n].split(/[\s-]+/);
        console.log(names);

        // read fields
        n+=2;
        const SEPARATOR = '--------------------------------------------------------------------------------';
        while (lines[n]!==SEPARATOR) {
            let columns = lines[n].split(/[-\s]+/);
            console.log( columns );
            n++;
        }// TODO can't just split need to consider number of columns and their position...
        
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