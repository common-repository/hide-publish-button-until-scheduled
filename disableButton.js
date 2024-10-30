jQuery(document).ready(function($) {
	let publishButton = $('#publish')
	let editTimestamp = $('div#misc-publishing-actions div') 
	checkTimestamp() //initially checks timestamp to disable the button
	publishButton.click(function(){
		//if publish button is disabled, alerts user that the post must be scheduled
		if(publishButton.hasClass('disabled')) { 
			alert('You must schedule this post')
		} 
	})

	editTimestamp.click(checkTimestamp) //if the timestamp button is clicked, checks the date

	function checkTimestamp() {
		let today = new Date();
		let mm = $('#mm').val() - 1 // must subtract 1 for javascript month format
		let dd = $('#jj').val() // day
		let yyyy = $('#aa').val() // year
		let date = new Date(yyyy, mm, dd)
		// compares date on the page to todays date, and disables or enables based on the date
		if (date>today) {
			publishButton.removeClass('disabled')
		} else {
			publishButton.addClass('disabled')
		}
	}
})