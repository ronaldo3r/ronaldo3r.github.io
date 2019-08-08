$(document).ready(function(){
    
    document.querySelectorAll('.skills').forEach(skills => {
        skills.addEventListener('click', function() {

            let skill_type = this.getAttribute('skill-type')
            let title = '';
            let content = '';

            switch (skill_type) {
                case 'frontend':
                    title = 'Front-end'
                    content = 'HTML5, CSS, SASS, JS/ES6, jQuery, Vuejs, Typescript, Angular, React, FullCalendar, AdminLTE'
                    break;
                case 'backend':
                    title = 'Back-end'
                    content = 'Nodejs, C#, PHP, Django, Meteor, Express, Sails, Adonis, Java Spring, Go, Laravel'
                    break;
                case 'frameworks':
                    title = 'Frameworks'
                    content = 'Bootstrap, foundation, Material Design Lite, Bulma CSS, Semantic UI, BootFlat, FlatUI'
                    break;
                case 'wireframes':
                    title = 'Wireframes and Prototypes'
                    content = 'Axure, Adobe XD, Sketch, Photoshop, Gravity Design, Krita, Gimp'
                    break;
                case 'platforms':
                    title = 'Plataforms'
                    content = 'Wordpress, OpenCart, Drupal, Komercia, Joomla, Shopify, WooComerce, Magento, PrestaShop'
                    break;
                case 'vector':
                    title = 'Vector (icons)'
                    content = 'Inkscape, Illustrator, Gravity Design, Krita'
                    break;
                case 'auto':
                    title = 'Automation tools'
                    content = 'Gulp, Grunt, Jenkins, Chef, Memcached'
                    break;
                case 'others':
                    title = 'Others'
                    content = 'Git, Hotjar, Resposive Design (mobile-fisrt), basic SEO, Agile methodologies, Vagrant, VSCode, Full-Stack, Chef'
                    break;
                default:
                    title = ''
                    content = ''
                    break;
            }
            
            document.getElementById('modal-title').innerHTML = title
            document.getElementById('modal-content').innerHTML = content

            let altura = 250
            let anchura = 500 

            let y = parseInt( ($(document).height()/2) - (altura/2));
            let x = parseInt( ($(document).width()/2) - (anchura/2));

            $('#popup').css('top',y)
            $('#popup').css('left',x)

            $('body').css({'overflow':'hidden'});
            $(document).bind('scroll',function () { 
                window.scrollTo(0,0); 
            });

            $('#popup').fadeIn('slow');
            $('.popup-overlay').fadeIn('slow');
            $('.popup-overlay').height($(document).height());
            $('.popup-overlay').width($(document).width());        
            
        })
    })

    $('#close').on('click', function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');

        $(document).unbind('scroll');
        $('body').css({'overflow':'visible'});
        return false;
    });
});