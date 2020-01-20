$(function(){
    var thisLang = localStorage.getItem('langs');
    console.log(thisLang);
    if(thisLang == null || thisLang == undefined || thisLang == 'undefined') {
        translate('ko');
        imgSrc('ko');
        $('body').addClass('ko');
        $('.hd__lang').val('ko');
    }
    else {
        translate(thisLang);
        imgSrc(thisLang);
        $('body').addClass(thisLang);
        $('.hd__lang').val(thisLang);
    }
    $('.hd__lang').on("change",function(){
        selectLang = $(this).val();
        localStorage.setItem('langs',selectLang);
        thisLang = localStorage.getItem('langs');
        $('body').attr('class','');
        $('body').addClass(thisLang);
        translate(thisLang);
        imgSrc(thisLang);
        $('html,body').scrollTop('0');
    });

    var menuBtn = 0;
    $('.hd-menu__btn').click(function(){
        if(menuBtn == 0){
            $('.hd-menu__btn, .hd__navi, .bg-mo-menu').addClass('active');
            menuBtn = 1;
        }
        else {
            $('.hd-menu__btn, .hd__navi, .bg-mo-menu').removeClass('active');
            menuBtn = 0;
        }
    });
});

function translate(thisLang) {
    $('*').each(function(){
        var thisData = $(this).attr('data-translate');
        if(thisData != null){
            var datas = 'lang.' + thisLang + '.' + thisData;
            datas = eval(datas);
            $(this).html(datas);
        }
    });
}

function imgSrc(thisLang) {
    $('.deal-main img').attr('src','images/deal_main_' + thisLang + '.png');
    $('.deal-sub-1 img').attr('src','images/deal_sub_1_' + thisLang + '.png');
    $('.graph-1 .deal-graph').attr('src','images/graph_1_' + thisLang + '.png');
    $('.structure-role__img').attr('src','images/structure/structure_role_' + thisLang + '.png');
    $('.platform__img').attr('src','images/structure/structure_platform_' + thisLang + '.png');
    $('.path__img').attr('src','images/structure/structure_path_' + thisLang + '.png');
    $('.scenario-main .scenario__img').attr('src','images/scenario_1_' + thisLang + '.png');
    $('.scenario-sub .scenario__img').attr('src','images/scenario_2_' + thisLang + '.png');
}