/*
*   Input verification helper functions
*/

import {reservedNamesList} from './ReservedNames';


/*
*
*/






/*
*  Highlighting
*/
export function runValidityCheck(fields) {
    let validity = 'true';

    fields.forEach(function(field) {


        switch(field.validationType) {
            case 'email':
                if(invalid_email(field.data)) {
                    alertFormField(field.id);
                    validity = false;
                }
                break;
            case 'name':
                if(invalid_single_name(field.data)){
                    alertFormField(field.id);
                    validity = false;
                }
                break;
            case 'username':
                if(invalid_username(field.data)){
                    alertFormField(field.id);
                    validity = false;
                }
                break;
            case 'password':
                if(invalid_password(field.data)){
                    alertFormField(field.id);
                    validity = false;
                }
                break;
            case 'passwords':
                if(invalid_passwords(field.data, field.confirmation)){
                    alertFormField(field.id);
                    alertFormField(field.id2);
                    validity = false;
                }
                break;
            case 'date':
                if(invalid_date_yyyy_mm_dd(field.data)){
                    alertFormField(field.id);
                    validity = false;
                }
                break;
            case 'gender':
                if(invalid_gender(field.data)){
                    alertFormField(field.id);
                    validity = false;
                }
                break;
            default:
        }
    });

    return validity;

}



export function alertFormField(id) {
    document.getElementById(id).classList.add('invalid-form-field');
    setTimeout(function() {
        document.getElementById(id).classList.remove('invalid-form-field');
    }, 1000);
}

/*
*
*   Generic Check Functions With Error Messages
*   some of these return json arrays with validity:true/false and error messages
*   This code gets ugly...
*
*/

/*
*  NOTES: Change 'only_etc.." function names to start with 'is' and return true if valid
*/


export function invalid_email(str) {
    if(is_empty(str))return true;
    else if(!only_valid_email_address(str))return true;
    else return false;
}

export function invalid_gender(str) {
    if(is_empty(str))return true;
    else return false;
}

export function invalid_date_yyyy_mm_dd(str) {
    if(is_empty(str))return true;
    else if(!only_valid_date_yyyy_mm_dd(str))return true;
    else return false;
}

export function invalid_passwords(str1, str2) {
    if(is_empty(str1) || is_empty(str2))return true;
    else if(str1 !== str2)return true;
    //else if(!only_moderate_passwords(str1))return true;
    else return false;
}

export function invalid_password(str) {
    if(is_empty(str))return true;
    //else if(!only_moderate_passwords(str))return true;
    else return false;
}

export function invalid_username(str) {
    if(is_empty(str))return true;
    //else if(!only_typical_usernames(str))return true;
    //else if(!only_non_reserved_names(str))return true; not working
    else return false;
}

export function invalid_phone_number(str) {
    if(is_empty(str))return true;
    else if(!only_valid_phone_number(str))return true;
    else return false;
}


export function invalid_single_name(str) {
    if(is_empty(str))return true;
    else if(!only_a_through_z(str))return true;
    else return false;
}

/*
* Validity checks w/ error messages
*/

export function check_full_legal_name_with_messages(str) {
    let message = [];

    if(is_empty(str))return no_input;

    if(!only_a_through_z_and_spaces(str))return invalid_characters();

    let splitName = str.split(' ');
    let wordCount = splitName.length;
    if(wordCount >= 5 || str.length >= 100)return input_is_too_long;

    message.push({value: 'true'});
    return message;
}

export function check_formal_name_with_messages(str) {
    let message = [];

    if(is_empty(str))return no_input();

    if(!only_a_through_z_spaces_and_period(str))return invalid_characters();

    let splitName = str.split(' ');
    let wordCount = splitName.length;
    if(wordCount >= 5 || str.length >= 100)return input_is_too_long();

    let validity = 'true';

    for (let i = 0; i < wordCount; ++i) {
        if(characterCount(splitName[i]) === 1) {
            if(i === splitName.length-1)
                message.push({message:' Last name must not be an initial '});
            if (!/[.]/.test(splitName[i])) //ensure '.'
                message.push({message:' (' + splitName[i] + ') is missing a `.` '});
        }
        if(characterCount(splitName[i]) >= 2) {
            if (/[.]/.test(splitName[i])) //prevent '.'
                message.push({message:' (' + splitName[i] + ') should not have a `.` (only initials) '});
        }
    }
    message.push({value: validity});
    return message;
}

/*
*   Common Error Messages
*/

function no_input() {
    return [{value: 'false'}, {message: ' Input is empty! '}];
}

function invalid_characters() {
    return[{value: 'false'}, {message: ' Invalid characters! '}];
}

function input_is_too_long() {
    return[{value: 'false'}, {message: ' Input is too long! '}];
}

/*
*   Other Validations
*/

function is_empty(str) {
    if(str === undefined) return true;
    else if(str === '')return true;
    else return false;
}

function characterCount (str) {
    let chars = str.match(/[a-zA-Z]/gi); //this func returns character count excluding '.'
    return(chars.length);
}

/*
*
*  REGEX Validations Below
*  These return boolean values when verifying input
*
*/

/* Account info */

function only_valid_email_address(str) {
    return (/@/.test(str)); //this one only checks for an @ symbol right now
}

function only_non_reserved_names(str) {
    let res = str.toLowerCase();
    if(reservedNamesList.find(res) !== undefined) return true;
    else return false;
}

function only_strong_passwords(str) {
    return (/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(str));
}

function only_moderate_passwords(str) {
    return (/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(str));

}

function only_typical_usernames(str) {
    return (/^[a-z0-9_-]{3,16}$/.test(str));
}

function only_valid_phone_number(str) {
    return (/^\+?(\d.*){3,}$/.test(str));
}

function only_valid_date_mm_dd_yyyy(str) {
    return(/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/.test(str));
}

function only_valid_date_yyyy_mm_dd(str) {
    if(!(/\b(19|[2-9][0-9])\d{2}-([0|1])\d-([0-3])\d\b/.test(str)))console.log('too-old');
    return(/\b(19|[2-9][0-9])\d{2}-([0|1])\d-([0-3])\d\b/.test(str));
}

/* Links */

function only_valid_url_with_protocol(str) {
    return (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/.test(str));
}

function only_valid_url(str) {
    return(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(str));
}

/* HTML, Code Etc... */

function only_html_tags_with_content(str) {
    return(/<\/?[\w\s]*>|<.+[\W]>/.test(str));
}

function only_valid_slugs(str) {
    return(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str));
}

function only_valid_hex_colors(str) {
    return(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str));
}

/* Text */

function only_a_through_z(str) {
    return (!/[^a-zA-Z]/.test(str));
}

function only_a_through_z_and_spaces(str) {
    return (/[^a-zA-Z ]/.test(str));
}

function only_a_through_z_spaces_and_period(str) {
    return (/[^a-zA-Z .]/.test(str));
}

function only_alphanumeric(str) {
    return (/^[a-zA-Z0-9]*$/.test(str));
}

function only_alphanumeric_with_space(str) {
    return (/^[a-zA-Z0-9 ]*$/.test(str));
}

/* numerical */

function only_whole_numbers(val) {
    return (/^[0-9 ]/.test(val));
}

function only_decimal_numbers(val) {
    return (/^\d*\.\d+$/.test(val));
}

function only_whole_and_decimal_numbers(val) {
    return (/^\d*(\.\d+)?$/.test(val));
}

function only_negative_positive_and_decimal_numbers(val) {
    return (/^-?\d*(\.\d+)?$/.test(val));
}

function only_negative_positive_decimal_and_fractions(val) {
    return (/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/.test(val));
}
