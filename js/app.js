const blogBtnEl = document.getElementById('btn-blog');
const donationBtnEl = document.getElementById('btn-donation');
const historyBtnEl = document.getElementById('btn-history');
const donationSection = document.getElementById('donation-sec');
const historySection = document.getElementById('history-sec');
const donateNowAllBntEl = document.getElementsByClassName('btn-donate-now');


const totalBalance = getTextFieldValueById('total-amount');
const noakhaliDonateBtn = document.getElementById('btn-noakhali-donate');
const feniDonateBtn = document.getElementById('btn-feni-donate');
const quotaMovementDonateBtn = document.getElementById('btn-quota-movement-donate')




// show the donation section
donationBtnEl.addEventListener('click',function(){
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    //  change the button color when active
    donationBtnEl.classList.add('bg-primary','text-black',);
    historyBtnEl.classList.remove('bg-primary','text-black');

    donationBtnEl.classList.remove('text-para/70');
    historyBtnEl.classList.add('text-para/70');
});

// show the history section
historyBtnEl.addEventListener('click',function(){
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
    // change the button color when active
    historyBtnEl.classList.add('bg-primary','text-black');
    donationBtnEl.classList.remove('bg-primary','text-black');

    historyBtnEl.classList.remove('text-para/70');
    donationBtnEl.classList.add('text-para/70');

});

// donate now bnt handle function
function handleDonateNow(donateInputId,currentDonateId,donateTitleId){
    const donateAmount = getInputValueById(donateInputId);
    const newTotalBalance = totalBalance - donateAmount;
    const currentDonateTotal = getTextFieldValueById(currentDonateId);

    // input validation 
    if(donateAmount > totalBalance || donateAmount <= 0 || isNaN(donateAmount) || donateAmount === "" ){
        alert('Invalid Amount. Please try again later.');
        return;
    }

    // update the total and card amount
    document.getElementById('total-amount').innerText = newTotalBalance;
    document.getElementById(currentDonateId).innerText = currentDonateTotal + donateAmount;

    const historyContainer = document.getElementById('history-sec');
    const donateTitle = document.getElementById(donateTitleId).innerText;
    const currentDate = new Date().toString();

    // transaction history 

    historyContainer.innerHTML += `
        <div class="w-full border border-gray-200 p-8 rounded-2xl space-y-4">
          <h3 class="text-black text-lg md:text-xl font-bold">
            ${donateAmount} Taka is ${donateTitle}
          </h3>
          <p class="text-base text-para/70">
            Date : ${currentDate}
          </p>
        </div>
    
    `;
    // clear the inputfield
    document.getElementById(donateInputId).value = "";

    // open the modal
    document.getElementById('my_modal_1').showModal();

    
}

// functional the noakhali donation sec
 
noakhaliDonateBtn.addEventListener('click',function(){
    handleDonateNow('input-noakhali-donate','noakhali-donate-total','title-noakhali-donate');
});

// functional the feni donation sec
feniDonateBtn.addEventListener('click',function(){
    handleDonateNow('input-feni-donate','feni-donate-total','title-feni-donate');
});

// functional the quota movement donation sec
quotaMovementDonateBtn.addEventListener('click',function(){
   handleDonateNow('input-quota-movement-donate','quota-movement-donate-total','title-quota-movement-donate') ;
})






//  change the location when click blog btn
blogBtnEl.addEventListener('click',function(){
    window.location.href = './blog.html'
    console.log('clicked blog')
})