/**
 * 
 * Save/Select all paragraphs by id. (or an object with each paragraph text)
 * Change each paragraph text. (func)
 * Read the text from a JSON file depending on language
 * 
 */
 (function($) {
    
    let $window = $(window)
    
    $window.on('load', change_lanText($, 'en'))
    $('#spa_button').click(function() {
        change_language($, 'spa')     
    })
    $('#en_button').click(function() {
        change_language($, 'en')
    })
    
})(jQuery);


function change_language(jQ, lan){
    change_lanText(jQ, lan)
    change_cvlink(jQ, lan)
}

function change_lanText(jQ, lan){
    jQ.getJSON('assets/js/languages.json', function(languages) {       
       sel_lan = languages[lan]
       jQ.each(sel_lan, function(key, value){
            jQ(`#${key}`).text(value)
       })
    });
    //failure check  
}

function change_cvlink(jQ, lan){
    var new_cvfilename = `assets/cv/${lan}_CV_Andres.pdf`
    jQ.get(new_cvfilename)
    .done(function() { 
        jQ('#cv_download').attr("href", new_cvfilename);
    }).fail(function() { 
        console.log(`${cvfilename} does not exist`)
    })

}