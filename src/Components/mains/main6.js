import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {px} from "framer-motion";

function Main6() {
    return (
        <Box
            sx={{
                marginTop: '250px',
                width: '65%',
                height: '350px',
                borderTopRightRadius: '105px',
            }}>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46589.05516352657!2d70.94126!3d40.581728000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bae94ba96c9119%3A0xb07f7b603bee9865!2zRVVST1BSSU5UIEtPS0FORC3QutGA0LDRhNGCINC_0LDQutC10YLRiyDQotCw0YjQutC10L3Rgiwg0L_QvtC70LjQs9GA0LDRhNC40Y8g0LIg0KLQsNGI0LrQtdC90YLQtSwg0YLQuNC_0L7Qs9GA0LDRhNC40Y8g0LIg0YLQsNGI0LrQtdC90YLQtSwg0YPQv9Cw0LrQvtCy0L7Rh9C90YvQtSDQv9Cw0LrQtdGC0Ysg0LIg0KLQsNGI0LrQtdC90YLQtSwg0LrRgNCw0YTRgiDQv9Cw0LrQtdGC0Ysg0YEg0LvQvtCz0L7RgtC40L_QvtC8LCDQv9C10YfQsNGC0Ywg0LLQuNC30LjRgtC-0LosINGA0LDQt9GA0LDQsdC-0YLQutCwINCx0YDQtdC90LTQsdGD0LrQsCwg0L_QsNC60LXRgtGLINC90LAg0LfQsNC60LDQtyDRgtCw0YjQutC10L3Rgg!5e1!3m2!1sen!2sus!4v1740773689106!5m2!1sen!2sus"
                width="100%" height="100%" style={{border: 0, borderTopRightRadius: '105px'}} allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>

        </Box>
    );
}

export default Main6;