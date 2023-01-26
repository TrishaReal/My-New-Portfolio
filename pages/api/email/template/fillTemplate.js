const fillTemplate = (data) => {
    const dataDefault = {
        from: 'youremail goes here',
        type: 'greetings',
        subject: 'Title goes here...',
        preheader: '',
        greetings: 'Hey Ciao!',
        message: 'Come va? Spero che stia andando tutto bene...',
        callToAction: {
            name: 'Call to action',
            href: 'http://localhost:3000/',
            active: true,
        },
        conclusion: 'Your conclusion goes here...',
        thanks: 'Grazie per il tuo tempo. Buona Fortuna!',
        unsubscribe: {
            name: 'Unsubscribe',
            href: 'http://localhost:3000/',
            message: 'Email invadenti?',
            active: false,
        },
        footer: {
            name: '© 2023, Offerta da',
            href: 'https://trishasairenereal.vercel.app/',
            message: 'trishasairenereal.vercel.app',
            active: true,
        },
    };

    const options = {
        ...dataDefault,
        ...data,
    };

    switch (options?.type) {
        case 'greetings':
            return `
            <!doctype html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>${options?.title}</title>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

                /* -------------------------------------
                    GLOBAL RESETS
                ------------------------------------- */
                
                /*All the styling goes here*/
                
                img {
                    border: none;
                    -ms-interpolation-mode: bicubic;
                    max-width: 100%; 
                }
            
                body {
                    background-color: transparent;
    background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                    font-family: 'Rubik', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    font-size: 16px;
                    line-height: 1.4;
                    margin: 0;
                    padding: 0;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%; 
                }
            
                table {
                    border-collapse: separate;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    width: 100%; }
                    table td {
                    font-family: 'Rubik', sans-serif;
                    font-size: 16px;
                    vertical-align: top; 
                }
            
                /* -------------------------------------
                    BODY & CONTAINER
                ------------------------------------- */
            
                .body {
                    background-color: transparent;
    background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                    width: 100%; 
                }
            
                /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                .container {
                    display: block;
                    margin: 0 auto !important;
                    /* makes it centered */
                    max-width: 580px;
                    padding: 10px;
                    width: 580px; 
                }
            
                /* This should also be a block element, so that it will fill 100% of the .container */
                .content {
                    box-sizing: border-box;
                    display: block;
                    margin: 0 auto;
                    max-width: 580px;
                    padding: 10px; 
                }
            
                /* -------------------------------------
                    HEADER, FOOTER, MAIN
                ------------------------------------- */
                .main {
                    background: #ffffff;
                    border-radius: 10px;
                    width: 100%; 
                    border: 2px #000 solid;
                }
            
                .wrapper {
                    box-sizing: border-box;
                    padding: 20px; 
                    
                }
            
                .content-block {
                    padding-bottom: 10px;
                    padding-top: 10px;
                }
            
                .footer {
                    clear: both;
                    margin-top: 10px;
                    text-align: center;
                    width: 100%; 
                }
                    .footer td,
                    .footer p,
                    .footer span,
                    .footer a {
                    color: #999999;
                    font-size: 12px;
                    text-align: center; 
                }
            
                /* -------------------------------------
                    TYPOGRAPHY
                ------------------------------------- */
                h1,
                h2,
                h3,
                h4 {
                    color: #000000;
                    font-family: 'Rubik', sans-serif;
                    font-weight: 400;
                    line-height: 1.4;
                    margin: 0;
                    margin-bottom: 30px; 
                }
            
                h1 {
                    font-size: 35px;
                    font-weight: 300;
                    text-align: center;
                    text-transform: capitalize; 
                }
            
                p,
                ul,
                ol {
                    font-family: 'Rubik', sans-serif;
                    font-size: 16px;
                    font-weight: normal;
                    margin: 0;
                    margin-bottom: 15px; 
                }
                    p li,
                    ul li,
                    ol li {
                    list-style-position: inside;
                    margin-left: 5px; 
                }
            
                a {
                    color: #5C64CF;
                    text-decoration: underline; 
                }
            
                /* -------------------------------------
                    BUTTONS
                ------------------------------------- */
                .btn {
                    margin-top: 2em;
                    box-sizing: border-box;
                    width: 100%; }
                    .btn > tbody > tr > td {
                    padding-bottom: 0; 
                }
                    .btn table {
                    width: auto; 
                }
                    .btn table td {
                    background-color: #ffffff;
                    border-radius: 5px;
                    text-align: center; 
                }
                    .btn a {
                    background-color: #ffffff;
                    border: solid 1px #000;
                    border-radius: 5px;
                    box-sizing: border-box;
                    color: #5C64CF;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0;
                    padding: 10px 20px;
                    text-decoration: none;
                    text-transform: capitalize; 
                }
            
                .btn-primary table td {
                    background-color: #5C64CF; 
                }
            
                .btn-primary a {
                    background-color: #5C64CF;
                    border-color: #5C64CF;
                    color: #ffffff; 
                }
            
                /* -------------------------------------
                    OTHER STYLES THAT MIGHT BE USEFUL
                ------------------------------------- */
                .last {
                    margin-bottom: 0; 
                }
            
                .first {
                    margin-top: 0; 
                }
            
                .align-center {
                    text-align: center; 
                }
            
                .align-right {
                    text-align: right; 
                }
            
                .align-left {
                    text-align: left; 
                }
            
                .clear {
                    clear: both; 
                }
            
                .mt0 {
                    margin-top: 0; 
                }
            
                .mb0 {
                    margin-bottom: 0; 
                }
            
                .preheader {
                    color: transparent;
                    display: none;
                    height: 0;
                    max-height: 0;
                    max-width: 0;
                    opacity: 0;
                    overflow: hidden;
                    mso-hide: all;
                    visibility: hidden;
                    width: 0; 
                }
            
                .powered-by a {
                    text-decoration: none; 
                }
            
                hr {
                    border: 0;
                    border-bottom: 1px solid #f6f6f6;
                    margin: 20px 0; 
                }
            
                /* -------------------------------------
                    RESPONSIVE AND MOBILE FRIENDLY STYLES
                ------------------------------------- */
                @media only screen and (max-width: 620px) {
                    table.body h1 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important; 
                    }
                    table.body p,
                    table.body ul,
                    table.body ol,
                    table.body td,
                    table.body span,
                    table.body a {
                    font-size: 16px !important; 
                    }
                    table.body .wrapper,
                    table.body .article {
                    padding: 10px !important; 
                    }
                    table.body .content {
                    padding: 0 !important; 
                    }
                    table.body .container {
                    padding: 0 !important;
                    width: 100% !important; 
                    }
                    table.body .main {
                    border-left-width: 0 !important;
                    border-radius: 0 !important;
                    border-right-width: 0 !important; 
                    }
                    table.body .btn table {
                    width: 100% !important; 
                    }
                    table.body .btn a {
                    width: 100% !important; 
                    }
                    table.body .img-responsive {
                    height: auto !important;
                    max-width: 100% !important;
                    width: auto !important; 
                    }
                }
            
                /* -------------------------------------
                    PRESERVE THESE STYLES IN THE HEAD
                ------------------------------------- */
                @media all {
                    .ExternalClass {
                    width: 100%; 
                    }
                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                    line-height: 100%; 
                    }
                    .apple-link a {
                    color: inherit !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    text-decoration: none !important; 
                    }
                    #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                    font-size: inherit;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                    }
                    .btn-primary table td:hover {
                    background-color: #34495e !important; 
                    }
                    .btn-primary a:hover {
                    background-color: #34495e !important;
                    border-color: #34495e !important; 
                    } 
                }
            
                </style>
            </head>
            <body>
                <span class="preheader">${options?.preheader}</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
                <tr>
                    <td>&nbsp;</td>
                    <td class="container">
                    <div class="content">
            
                        <!-- START CENTERED WHITE CONTAINER -->
                        <table role="presentation" class="main">
            
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                <td>
                                    <p>${options?.greetings}</p>
                                    <p>${options?.message}</p>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                        <tbody>
                                            
                                            ${
                                                (options?.callToAction &&
                                                    options?.callToAction
                                                        ?.active &&
                                                    `<tr>
                                                    <td align="left">
                                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                <td> <a href=${options?.callToAction?.href} target="_blank">${options?.callToAction?.name}</a> </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>`) ||
                                                ''
                                            }
                                            
                                        </tbody>
                                    </table>
                                    <p>${options?.conclusion}</p>
                                    <p>${options?.thanks}</p>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
            
                        <!-- END MAIN CONTENT AREA -->
                        </table>
                        <!-- END CENTERED WHITE CONTAINER -->
            
                        <!-- START FOOTER -->
                        <div class="footer">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                ${
                                    (options?.unsubscribe &&
                                        options?.unsubscribe?.active &&
                                        `<tr>
                                        <td class="content-block">
                                            <span class="apple-link"></span>
                                            <br> ${options?.unsubscribe?.message} <a href=${options?.unsubscribe?.href}>${options?.unsubscribe?.name}</a>.
                                        </td>
                                    </tr>`) ||
                                    ''
                                }
                                ${
                                    (options?.footer &&
                                        options?.footer?.active &&
                                        `<tr>
                                        <td class="content-block powered-by">
                                            ${options?.footer?.name} <a>${options?.footer?.message}</a>.
                                        </td>
                                    </tr>`) ||
                                    ''
                                }
                            </table>
                        </div>
                        <!-- END FOOTER -->
            
                    </div>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                </table>
            </body>
            </html>
        
            `;

        case 'summary':
            return `
            <!doctype html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>${options?.title}</title>
                <style>
                /* -------------------------------------
                    GLOBAL RESETS
                ------------------------------------- */
                
                /*All the styling goes here*/
                
                img {
                    border: none;
                    -ms-interpolation-mode: bicubic;
                    max-width: 100%; 
                }
            
                body {
                    background-color: transparent;
    background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                    font-family: 'Rubik', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    font-size: 16px;
                    line-height: 1.4;
                    margin: 0;
                    padding: 0;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%; 
                }
            
                table {
                    border-collapse: separate;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    width: 100%; }
                    table td {
                    font-family: 'Rubik', sans-serif;
                    font-size: 16px;
                    vertical-align: top; 
                }
            
                /* -------------------------------------
                    BODY & CONTAINER
                ------------------------------------- */
            
                .body {
                    background-color: transparent;
    background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                    width: 100%; 
                }
            
                /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                .container {
                    display: block;
                    margin: 0 auto !important;
                    /* makes it centered */
                    max-width: 580px;
                    padding: 10px;
                    width: 580px; 
                }
            
                /* This should also be a block element, so that it will fill 100% of the .container */
                .content {
                    box-sizing: border-box;
                    display: block;
                    margin: 0 auto;
                    max-width: 580px;
                    padding: 10px; 
                }
            
                /* -------------------------------------
                    HEADER, FOOTER, MAIN
                ------------------------------------- */
                .main {
                    background: #ffffff;
                    border-radius: 10px;
                    width: 100%; 
                    border: 2px #000 solid;
                }
            
                .wrapper {
                    box-sizing: border-box;
                    padding: 20px; 
                   
                }
            
                .content-block {
                    padding-bottom: 10px;
                    padding-top: 10px;
                }
            
                .footer {
                    clear: both;
                    margin-top: 10px;
                    text-align: center;
                    width: 100%; 
                }
                    .footer td,
                    .footer p,
                    .footer span,
                    .footer a {
                    color: #999999;
                    font-size: 12px;
                    text-align: center; 
                }
            
                /* -------------------------------------
                    TYPOGRAPHY
                ------------------------------------- */
                h1,
                h2,
                h3,
                h4 {
                    color: #000000;
                    font-family: 'Rubik', sans-serif;
                    font-weight: 400;
                    line-height: 1.4;
                    margin: 0;
                    margin-bottom: 30px; 
                }
            
                h1 {
                    font-size: 35px;
                    font-weight: 300;
                    text-align: center;
                    text-transform: capitalize; 
                }
            
                p,
                ul,
                ol {
                    font-family: 'Rubik', sans-serif;
                    font-size: 16px;
                    font-weight: normal;
                    margin: 0;
                    margin-bottom: 15px; 
                }
                    p li,
                    ul li,
                    ol li {
                    list-style-position: inside;
                    margin-left: 5px; 
                }
            
                a {
                    color: #5C64CF;
                    text-decoration: underline; 
                }
            
                /* -------------------------------------
                    BUTTONS
                ------------------------------------- */
                .btn {
                    box-sizing: border-box;
                    width: 100%; }
                    .btn > tbody > tr > td {
                    padding-bottom: 15px; }
                    .btn table {
                    width: auto; 
                }
                    .btn table td {
                    background-color: #ffffff;
                    border-radius: 5px;
                    text-align: center; 
                }
                    .btn a {
                    background-color: #ffffff;
                    border: solid 1px #5C64CF;
                    border-radius: 5px;
                    box-sizing: border-box;
                    color: #5C64CF;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0;
                    padding: 10px 20px;
                    text-decoration: none;
                    text-transform: capitalize; 
                }
            
                .btn-primary table td {
                    background-color: #5C64CF; 
                }
            
                .btn-primary a {
                    background-color: #5C64CF;
                    border-color: #5C64CF;
                    color: #ffffff; 
                }
            
                /* -------------------------------------
                    OTHER STYLES THAT MIGHT BE USEFUL
                ------------------------------------- */
                .last {
                    margin-bottom: 0; 
                }
            
                .first {
                    margin-top: 0; 
                }
            
                .align-center {
                    text-align: center; 
                }
            
                .align-right {
                    text-align: right; 
                }
            
                .align-left {
                    text-align: left; 
                }
            
                .clear {
                    clear: both; 
                }
            
                .mt0 {
                    margin-top: 0; 
                }
            
                .mb0 {
                    margin-bottom: 0; 
                }
            
                .preheader {
                    color: transparent;
                    display: none;
                    height: 0;
                    max-height: 0;
                    max-width: 0;
                    opacity: 0;
                    overflow: hidden;
                    mso-hide: all;
                    visibility: hidden;
                    width: 0; 
                }
            
                .powered-by a {
                    text-decoration: none; 
                }
            
                hr {
                    border: 0;
                    border-bottom: 1px solid #f6f6f6;
                    margin: 20px 0; 
                }
            
                /* -------------------------------------
                    RESPONSIVE AND MOBILE FRIENDLY STYLES
                ------------------------------------- */
                @media only screen and (max-width: 620px) {
                    table.body h1 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important; 
                    }
                    table.body p,
                    table.body ul,
                    table.body ol,
                    table.body td,
                    table.body span,
                    table.body a {
                    font-size: 16px !important; 
                    }
                    table.body .wrapper,
                    table.body .article {
                    padding: 10px !important; 
                    }
                    table.body .content {
                    padding: 0 !important; 
                    }
                    table.body .container {
                    padding: 0 !important;
                    width: 100% !important; 
                    }
                    table.body .main {
                    border-left-width: 0 !important;
                    border-radius: 0 !important;
                    border-right-width: 0 !important; 
                    }
                    table.body .btn table {
                    width: 100% !important; 
                    }
                    table.body .btn a {
                    width: 100% !important; 
                    }
                    table.body .img-responsive {
                    height: auto !important;
                    max-width: 100% !important;
                    width: auto !important; 
                    }
                }
            
                /* -------------------------------------
                    PRESERVE THESE STYLES IN THE HEAD
                ------------------------------------- */
                @media all {
                    .ExternalClass {
                    width: 100%; 
                    }
                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                    line-height: 100%; 
                    }
                    .apple-link a {
                    color: inherit !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    text-decoration: none !important; 
                    }
                    #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                    font-size: inherit;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                    }
                    .btn-primary table td:hover {
                    background-color: #34495e !important; 
                    }
                    .btn-primary a:hover {
                    background-color: #34495e !important;
                    border-color: #34495e !important; 
                    } 
                }
            
                </style>
            </head>
            <body>
                <span class="preheader">${options?.preheader}</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
                <tr>
                    <td>&nbsp;</td>
                    <td class="container">
                    <div class="content">
            
                        <!-- START CENTERED WHITE CONTAINER -->
                        <table role="presentation" class="main">
            
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                <td>
                                    <p>${options?.greetings}</p>
                                    <p>${options?.message}</p>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                        <tbody>
                                            
                                            ${
                                                (options?.callToAction &&
                                                    options?.callToAction
                                                        ?.active &&
                                                    `<tr>
                                                    <td align="left">
                                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                <td> <a href=${options?.callToAction?.href} target="_blank">${options?.callToAction?.name}</a> </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>`) ||
                                                ''
                                            }
                                            
                                        </tbody>
                                    </table>
                                    <p>${options?.conclusion}</p>
                                    <p>${options?.thanks}</p>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
            
                        <!-- END MAIN CONTENT AREA -->
                        </table>
                        <!-- END CENTERED WHITE CONTAINER -->
            
                        <!-- START FOOTER -->
                        <div class="footer">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                ${
                                    (options?.unsubscribe &&
                                        options?.unsubscribe?.active &&
                                        `<tr>
                                        <td class="content-block">
                                            <span class="apple-link"></span>
                                            <br> ${options?.unsubscribe?.message} <a href=${options?.unsubscribe?.href}>${options?.unsubscribe?.name}</a>.
                                        </td>
                                    </tr>`) ||
                                    ''
                                }
                                ${
                                    (options?.footer &&
                                        options?.footer?.active &&
                                        `<tr>
                                        <td class="content-block powered-by">
                                            ${options?.footer?.name} <a href=${options?.footer?.href}>${options?.footer?.message}</a>.
                                        </td>
                                    </tr>`) ||
                                    ''
                                }
                            </table>
                        </div>
                        <!-- END FOOTER -->
            
                    </div>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                </table>
            </body>
            </html>
        
            `;
        default:
            return `
                    <!doctype html>
                    <html>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <title>${options?.title}</title>
                        <style>
                        /* -------------------------------------
                            GLOBAL RESETS
                        ------------------------------------- */
                        
                        /*All the styling goes here*/
                        
                        img {
                            border: none;
                            -ms-interpolation-mode: bicubic;
                            max-width: 100%; 
                        }
                    
                        body {
                            background-color: transparent;
    background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                            font-family: 'Rubik', sans-serif;
                            -webkit-font-smoothing: antialiased;
                            font-size: 16px;
                            line-height: 1.4;
                            margin: 0;
                            padding: 0;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%; 
                        }
                    
                        table {
                            border-collapse: separate;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            width: 100%; }
                            table td {
                            font-family: 'Rubik', sans-serif;
                            font-size: 16px;
                            vertical-align: top; 
                        }
                    
                        /* -------------------------------------
                            BODY & CONTAINER
                        ------------------------------------- */
                    
                        .body {
                            background-color: transparent;
    background-image: linear-gradient(0deg, #ffffff 0%, #f8ecdb 100%);
                            width: 100%; 
                        }
                    
                        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                        .container {
                            display: block;
                            margin: 0 auto !important;
                            /* makes it centered */
                            max-width: 580px;
                            padding: 10px;
                            width: 580px; 
                        }
                    
                        /* This should also be a block element, so that it will fill 100% of the .container */
                        .content {
                            box-sizing: border-box;
                            display: block;
                            margin: 0 auto;
                            max-width: 580px;
                            padding: 10px; 
                        }
                    
                        /* -------------------------------------
                            HEADER, FOOTER, MAIN
                        ------------------------------------- */
                        .main {
                            background: #ffffff;
                            border-radius: 10px;
                            width: 100%; 
                            border: 2px #000 solid;
                        }
                    
                        .wrapper {
                            box-sizing: border-box;
                            padding: 20px;
                            
                        }
                    
                        .content-block {
                            padding-bottom: 10px;
                            padding-top: 10px;
                        }
                    
                        .footer {
                            clear: both;
                            margin-top: 10px;
                            text-align: center;
                            width: 100%; 
                        }
                            .footer td,
                            .footer p,
                            .footer span,
                            .footer a {
                            color: #999999;
                            font-size: 12px;
                            text-align: center; 
                        }
                    
                        /* -------------------------------------
                            TYPOGRAPHY
                        ------------------------------------- */
                        h1,
                        h2,
                        h3,
                        h4 {
                            color: #000000;
                            font-family: 'Rubik', sans-serif;
                            font-weight: 400;
                            line-height: 1.4;
                            margin: 0;
                            margin-bottom: 30px; 
                        }
                    
                        h1 {
                            font-size: 35px;
                            font-weight: 300;
                            text-align: center;
                            text-transform: capitalize; 
                        }
                    
                        p,
                        ul,
                        ol {
                            font-family: 'Rubik', sans-serif;
                            font-size: 16px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px; 
                        }
                            p li,
                            ul li,
                            ol li {
                            list-style-position: inside;
                            margin-left: 5px; 
                        }
                    
                        a {
                            color: #5C64CF;
                            text-decoration: underline; 
                        }
                    
                        /* -------------------------------------
                            BUTTONS
                        ------------------------------------- */
                        .btn {
                            box-sizing: border-box;
                            width: 100%; }
                            .btn > tbody > tr > td {
                            padding-bottom: 15px; }
                            .btn table {
                            width: auto; 
                        }
                            .btn table td {
                            background-color: #ffffff;
                            border-radius: 5px;
                            text-align: center; 
                        }
                            .btn a {
                            background-color: #ffffff;
                            border: solid 1px #5C64CF;
                            border-radius: 5px;
                            box-sizing: border-box;
                            color: #5C64CF;
                            cursor: pointer;
                            display: inline-block;
                            font-size: 16px;
                            font-weight: bold;
                            margin: 0;
                            padding: 10px 20px;
                            text-decoration: none;
                            text-transform: capitalize; 
                        }
                    
                        .btn-primary table td {
                            background-color: #5C64CF; 
                        }
                    
                        .btn-primary a {
                            background-color: #5C64CF;
                            border-color: #5C64CF;
                            color: #ffffff; 
                        }
                    
                        /* -------------------------------------
                            OTHER STYLES THAT MIGHT BE USEFUL
                        ------------------------------------- */
                        .last {
                            margin-bottom: 0; 
                        }
                    
                        .first {
                            margin-top: 0; 
                        }
                    
                        .align-center {
                            text-align: center; 
                        }
                    
                        .align-right {
                            text-align: right; 
                        }
                    
                        .align-left {
                            text-align: left; 
                        }
                    
                        .clear {
                            clear: both; 
                        }
                    
                        .mt0 {
                            margin-top: 0; 
                        }
                    
                        .mb0 {
                            margin-bottom: 0; 
                        }
                    
                        .preheader {
                            color: transparent;
                            display: none;
                            height: 0;
                            max-height: 0;
                            max-width: 0;
                            opacity: 0;
                            overflow: hidden;
                            mso-hide: all;
                            visibility: hidden;
                            width: 0; 
                        }
                    
                        .powered-by a {
                            text-decoration: none; 
                        }
                    
                        hr {
                            border: 0;
                            border-bottom: 1px solid #f6f6f6;
                            margin: 20px 0; 
                        }
                    
                        /* -------------------------------------
                            RESPONSIVE AND MOBILE FRIENDLY STYLES
                        ------------------------------------- */
                        @media only screen and (max-width: 620px) {
                            table.body h1 {
                            font-size: 28px !important;
                            margin-bottom: 10px !important; 
                            }
                            table.body p,
                            table.body ul,
                            table.body ol,
                            table.body td,
                            table.body span,
                            table.body a {
                            font-size: 16px !important; 
                            }
                            table.body .wrapper,
                            table.body .article {
                            padding: 10px !important; 
                            }
                            table.body .content {
                            padding: 0 !important; 
                            }
                            table.body .container {
                            padding: 0 !important;
                            width: 100% !important; 
                            }
                            table.body .main {
                            border-left-width: 0 !important;
                            border-radius: 0 !important;
                            border-right-width: 0 !important; 
                            }
                            table.body .btn table {
                            width: 100% !important; 
                            }
                            table.body .btn a {
                            width: 100% !important; 
                            }
                            table.body .img-responsive {
                            height: auto !important;
                            max-width: 100% !important;
                            width: auto !important; 
                            }
                        }
                    
                        /* -------------------------------------
                            PRESERVE THESE STYLES IN THE HEAD
                        ------------------------------------- */
                        @media all {
                            .ExternalClass {
                            width: 100%; 
                            }
                            .ExternalClass,
                            .ExternalClass p,
                            .ExternalClass span,
                            .ExternalClass font,
                            .ExternalClass td,
                            .ExternalClass div {
                            line-height: 100%; 
                            }
                            .apple-link a {
                            color: inherit !important;
                            font-family: inherit !important;
                            font-size: inherit !important;
                            font-weight: inherit !important;
                            line-height: inherit !important;
                            text-decoration: none !important; 
                            }
                            #MessageViewBody a {
                            color: inherit;
                            text-decoration: none;
                            font-size: inherit;
                            font-family: inherit;
                            font-weight: inherit;
                            line-height: inherit;
                            }
                            .btn-primary table td:hover {
                            background-color: #34495e !important; 
                            }
                            .btn-primary a:hover {
                            background-color: #34495e !important;
                            border-color: #34495e !important; 
                            } 
                        }
                    
                        </style>
                    </head>
                    <body>
                        <span class="preheader">${options?.preheader}</span>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
                        <tr>
                            <td>&nbsp;</td>
                            <td class="container">
                            <div class="content">
                    
                                <!-- START CENTERED WHITE CONTAINER -->
                                <table role="presentation" class="main">
                    
                                <!-- START MAIN CONTENT AREA -->
                                <tr>
                                    <td class="wrapper">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                        <td>
                                            <p>${options?.greetings}</p>
                                            <p>${options?.message}</p>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                                <tbody>
                                                    
                                                    ${
                                                        (options?.callToAction &&
                                                            options
                                                                ?.callToAction
                                                                ?.active &&
                                                            `<tr>
                                                            <td align="left">
                                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                        <td> <a href=${options?.callToAction?.href} target="_blank">${options?.callToAction?.name}</a> </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>`) ||
                                                        ''
                                                    }
                                                    
                                                </tbody>
                                            </table>
                                            <p>${options?.conclusion}</p>
                                            <p>${options?.thanks}</p>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                </tr>
                    
                                <!-- END MAIN CONTENT AREA -->
                                </table>
                                <!-- END CENTERED WHITE CONTAINER -->
                    
                                <!-- START FOOTER -->
                                <div class="footer">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                        ${
                                            (options?.unsubscribe &&
                                                options?.unsubscribe?.active &&
                                                `<tr>
                                                <td class="content-block">
                                                    <span class="apple-link"></span>
                                                    <br> ${options?.unsubscribe?.message} <a href=${options?.unsubscribe?.href}>${options?.unsubscribe?.name}</a>.
                                                </td>
                                            </tr>`) ||
                                            ''
                                        }
                                        ${
                                            (options?.footer &&
                                                options?.footer?.active &&
                                                `<tr>
                                                <td class="content-block powered-by">
                                                    ${options?.footer?.name} <a href=${options?.footer?.href}>${options?.footer?.message}</a>.
                                                </td>
                                            </tr>`) ||
                                            ''
                                        }
                                    </table>
                                </div>
                                <!-- END FOOTER -->
                    
                            </div>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        </table>
                    </body>
                    </html>
                
            `;
    }
};

export default fillTemplate;
