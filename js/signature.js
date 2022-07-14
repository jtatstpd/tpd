let controls = document.querySelectorAll('.signature__control');
let socialControl = document.querySelector('.signature__control-checkbox')
let signature = document.querySelector('.fs__signature tbody');

let socialString = '<tr class="social__row"><td>&nbsp;</td><td><table style="border:none;border-collapse:collapse; margin-left:16px; margin-top:10px;"><tbody><tr><td class="data__target" data-target="name" style="font-weight: 600; color: #36485C;"><a href="https://www.facebook.com/Fullscript/" aria-label="Fullscript\'s Facebook - opens in a new window" target="_blank"><img src="https://fullscript.com/wp-content/uploads/images/socials_01.png" alt="Facebook logo"></a><a href="https://twitter.com/FullscriptHQ" aria-label="Fullscript\'s Twitter - opens in a new window" target="_blank"><img src="https://fullscript.com/wp-content/uploads/images/socials_02.png" alt="Twitter logo"></a><a href="https://www.instagram.com/fullscript/" aria-label="Fullscript\'s Instagram - opens in a new window" target="_blank"><img src="https://fullscript.com/wp-content/uploads/images/socials_03.png" alt="Instagram logo"></a><a href="https://ca.linkedin.com/company/fullscript" aria-label="Fullscript\'s Linkedin - opens in a new window" target="_blank"><img src="https://fullscript.com/wp-content/uploads/images/socials_04.png" alt="Linkedin logo"></a><a href="https://www.glassdoor.ca/Overview/Working-at-Fullscript-EI_IE1798871.11,21.htm" aria-label="Fullscript\'s Glassdoor - opens in a new window" target="_blank"><img src="https://fullscript.com/wp-content/uploads/images/socials_05.png" alt="logo"></a></td></tr></tbody></table></td></tr>';

for(control of controls){
    control.addEventListener('input', updateValue);
}

socialControl.addEventListener('click', socialToggle);


function updateValue(e) {
    let target = document.querySelector('td[data-target="' + e.target.getAttribute('name') + '"]');
    let newValue = e.target.value;
    
    if(newValue){
        target.style.display = "table-cell";
        if(e.target.getAttribute('name') == "pronouns"){
            newValue = "Pronouns: " + newValue;
        }
    }else{
        target.style.display = "none";
    }

    target.innerHTML = newValue;
  }
  
  function socialToggle(e){
      
    if(e.currentTarget.classList.contains('true')){
        let socialRow = document.querySelector('.social__row');
        socialRow.remove();
        e.currentTarget.classList.remove('true');
        e.currentTarget.classList.add('false');
        
    }else{

        e.currentTarget.classList.remove('false');
        e.currentTarget.classList.add('true');
        
        signature.innerHTML = signature.innerHTML + socialString;
    }
    
  }