$(document).ready(function () {

    document.querySelectorAll('.skills').forEach(skills => {
        skills.addEventListener('click', function () {

            let skill_type = this.getAttribute('skill-type')
            let title = '';
            let skill1 = '';
            let skill2 = '';
            let skill3 = '';
            let skill4 = '';
            let skill5 = '';

            switch (skill_type) {
                case 'frontend':
                    title = 'Front-end'
                    skill1 = 'HTML5: 80%';
                    skill2 = 'CSS: 80%';
                    skill3 = 'JS/ES6: 70%';
                    skill4 = 'Vuejs: 60%';
                    skill5 = 'React: 60%';
                    break;
                case 'backend':
                    title = 'Back-end'
                    skill1 = 'Java Spring: 90%';
                    skill2 = 'C#: 80%';
                    skill3 = 'Nodejs: 60%';
                    break;
                case 'frameworks':
                    title = 'Frameworks'
                    skill1 = 'Bootstrap: 90%';
                    break;
                case 'wireframes':
                    title = 'Prototipos y Wireframes'
                    skill1 = 'Photoshop: 80%';
                    skill2 = 'Adobe XD: 70%';
                    break;
                case 'platforms':
                    title = 'Plataformas'
                    skill1 = 'Wordpress: 80%';
                    break;
                case 'vector':
                    title = 'Vector (icons)'
                    skill1 = 'Illustrator: 80%';
                    skill2 = 'Gravity Design: 60%';
                    break;
                case 'auto':
                    title = 'Herrramientas de automatización'
                    skill1 = 'Jenkins: 90%';
                    break;
                case 'others':
                    title = 'Otros'
                    skill1 = 'Git';
                    skill2 = 'Metodologías ágiles';
                    skill3 = 'VSCode';
                    skill4 = 'Full-Stack';
                    break;
                default:
                    title = ''
                    skill1 = '';
                    skill2 = '';
                    skill3 = '';
                    skill4 = '';
                    skill5 = '';
                    break;
            }

            document.getElementById('title').innerHTML = title
            document.getElementById('skill1').innerHTML = skill1
            document.getElementById('skill2').innerHTML = skill2
            document.getElementById('skill3').innerHTML = skill3
            document.getElementById('skill4').innerHTML = skill4
            document.getElementById('skill5').innerHTML = skill5

            let altura = 250
            let anchura = 500

            let y = parseInt(($(document).height() / 2) - (altura / 2));
            let x = parseInt(($(document).width() / 2) - (anchura / 2));

            $('#popup').css('top', y)
            $('#popup').css('left', x)

            $('body').css({ 'overflow': 'hidden' });
            $(document).bind('scroll', function () {
                window.scrollTo(0, 0);
            });

            $('#popup').fadeIn('slow');
            $('.popup-overlay').fadeIn('slow');
            $('.popup-overlay').height($(document).height());
            $('.popup-overlay').width($(document).width());

        })
    })

    $('#close').on('click', function () {
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');

        $(document).unbind('scroll');
        $('body').css({ 'overflow': 'visible' });
        return false;
    });
});