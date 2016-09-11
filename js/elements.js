//ТАБЛИЦА МЕНДЕЛЕЕВА



var lastElement = [];
var thisElement = [];
var counter = 0; // Счетчик элементов

$(document).ready(function () {
    // Ввод элемента
    $("#text").change( function () {
        var text = $(this).val().toUpperCase().trim();
        $('#shadowFrame').remove();
        for (var i = 1; i < el.length; i++) {
            var inp = $('#' + el[i].elementNumber).text();
            if (text == el[i].NameRus && el[i].elementNumber == inp) {
                $('#'+el[i].elementNumber).html(el[i].NameLat);
                $("#labelElementRus").html(el[i].NameRus);
                $("#labelElementLat").html(el[i].NameLat);
                $("#labelElementNum").html(el[i].elementNumber);
                counter++;
                $('#counter').html(counter+'/112');
                $(this).val("");
                lastElement = [el[i].elementNumber, el[i].NameRus, el[i].NameLat]
                $('#' + el[i].elementNumber).css('border-color', 'crimson');
                $('#' + el[i].elementNumber).css('color', 'black');
                $('#' + el[i].elementNumber + '[class="red"]').delay(1500).queue(function(){
                $(this).css('background-color', 'red');
                $(this).dequeue();
                });
                $('#' + el[i].elementNumber + '[class="gold"]').delay(1500).queue(function () {
                    $(this).css('background-color', 'gold');
                    $(this).dequeue();
                });
                $('#' + el[i].elementNumber + '[class="green"]').delay(1500).queue(function () {
                    $(this).css('background-color', 'green');
                    $(this).dequeue();
                });
                $('#' + el[i].elementNumber + '[class="blue"]').delay(1500).queue(function () {
                    $(this).css('background-color', '#4d4dff');
                    $(this).dequeue();
                });
                if ($('#' + el[i].elementNumber).attr('class') == 'red') {
                    $('#elementFrame').css('background-color', 'red');
                }
                if ($('#' + el[i].elementNumber).attr('class') == 'gold') {
                    $('#elementFrame').css('background-color', 'gold');
                }
                if ($('#' + el[i].elementNumber).attr('class') == 'green') {
                    $('#elementFrame').css('background-color', 'green');
                }
                if ($('#' + el[i].elementNumber).attr('class') == 'blue') {
                    $('#elementFrame').css('background-color', '#4d4dff');
                }

                // Анимация элемента
                $('#elementFrame').after($('<div id="shadowFrame" class="red" style="cursor:default;">' + el[i].NameLat + '</div>'));
                var position = $('#' + el[i].elementNumber).offset();
                var positionStart = $('#elementFrame').offset();
                var widthStart = $(elementFrame).width();
                $('#shadowFrame').css(positionStart);
                $('#shadowFrame').css('width', widthStart);
                $('#shadowFrame')
                    .animate({ 'width': 60, 'height': 60 }, { duration: 1500, queue: false }, 'easeInBounce')
                    .animate({ 'font-size': '200%' }, { duration: 1500, queue: false })
                    .animate(position, { duration: 1500, queue: true }, 'easeInBounce')
                    .animate({ 'opacity': 0 }, { duration: 2500, queue: true });
                }
            }
        }
    );

    //Новая игра
    $("#new").click(function () {
        $('table div').css('background-color', 'honeydew');
        $('table div').css('color', 'gray');
        $('table div').css('border-color', 'burlywood');
        for (var i = 1; i < el.length; i++) {
            $('#' + i).html(el[i].elementNumber);
        }
        counter = 0;
        $('#counter').html(counter + '/112');
        $('#text').val("");
        $('#labelElementNum').html("");
        $('#labelElementLat').html("");
        $('#labelElementRus').html("");
        $('#elementFrame').css('background-color', 'honeydew');
        lastElement = [];
    });

    //Сдаться
    $("#resign").click(function () {
        $('table div').css('color', 'black');
        for (var i = 1; i < el.length; i++) {
            $('#' + i).html(el[i].NameLat);
        }
        $(text).attr('')
    });


    $('table div').hover(function () {
        var elementHover = $(this).text();
        var elementHoverId = $(this).attr('id');
        if (elementHover == el[elementHoverId].NameLat) {
            $('#labelElementRus').html(el[elementHoverId].NameRus);
            $('#labelElementLat').html(el[elementHoverId].NameLat);
            $('#labelElementNum').html(el[elementHoverId].elementNumber);
            if ($('#' + el[elementHoverId].elementNumber).attr('class') == 'red') {
                $('#elementFrame').css('background-color', 'red');
            }
            if ($('#' + el[elementHoverId].elementNumber).attr('class') == 'gold') {
                $('#elementFrame').css('background-color', 'gold');
            }
            if ($('#' + el[elementHoverId].elementNumber).attr('class') == 'green') {
                $('#elementFrame').css('background-color', 'green');
            }
            if ($('#' + el[elementHoverId].elementNumber).attr('class') == 'blue') {
                $('#elementFrame').css('background-color', '#4d4dff');
            }
        }
        else {
            $('#labelElementNum').html(elementHover);
            $('#labelElementLat').html('?');
            $('#labelElementRus').html('');
            $('#elementFrame').css('background-color', 'honeydew');
        }
    },
        function () {
            $('#labelElementRus').html(lastElement[1]);
            $('#labelElementLat').html(lastElement[2]);
            $('#labelElementNum').html(lastElement[0]);
            if ($('#' + el[lastElement[0]].elementNumber).attr('class') == 'red') {
                $('#elementFrame').css('background-color', 'red');
            }
            if ($('#' + el[lastElement[0]].elementNumber).attr('class') == 'gold') {
                $('#elementFrame').css('background-color', 'gold');
            }
            if ($('#' + el[lastElement[0]].elementNumber).attr('class') == 'green') {
                $('#elementFrame').css('background-color', 'green');
            }
            if ($('#' + el[lastElement[0]].elementNumber).attr('class') == 'blue') {
                $('#elementFrame').css('background-color', '#4d4dff');
            }
        });
});

var el = [
    { "elementNumber": "", "NameRus": "", "NameLat": "" },
    { "elementNumber": "1", "NameRus": "ВОДОРОД", "NameLat": "H" },
    { "elementNumber": "2", "NameRus": "ГЕЛИЙ", "NameLat": "He" },
    { "elementNumber": "3", "NameRus": "ЛИТИЙ", "NameLat": "Li" },
    { "elementNumber": "4", "NameRus": "БЕРИЛЛИЙ", "NameLat": "Be" },
    { "elementNumber": "5", "NameRus": "БОР", "NameLat": "B" },
    { "elementNumber": "6", "NameRus": "УГЛЕРОД", "NameLat": "C" },
    { "elementNumber": "7", "NameRus": "АЗОТ", "NameLat": "N" },
    { "elementNumber": "8", "NameRus": "КИСЛОРОД", "NameLat": "O" },
    { "elementNumber": "9", "NameRus": "ФТОР", "NameLat": "F" },
    { "elementNumber": "10", "NameRus": "НЕОН", "NameLat": "Ne" },
    { "elementNumber": "11", "NameRus": "НАТРИЙ", "NameLat": "Na" },
    { "elementNumber": "12", "NameRus": "МАГНИЙ", "NameLat": "Mg" },
    { "elementNumber": "13", "NameRus": "АЛЮМИНИЙ", "NameLat": "Al" },
    { "elementNumber": "14", "NameRus": "КРЕМНИЙ", "NameLat": "Si" },
    { "elementNumber": "15", "NameRus": "ФОСФОР", "NameLat": "P" },
    { "elementNumber": "16", "NameRus": "СЕРА", "NameLat": "S" },
    { "elementNumber": "17", "NameRus": "ХЛОР", "NameLat": "Cl" },
    { "elementNumber": "18", "NameRus": "АРГОН", "NameLat": "Ar" },
    { "elementNumber": "19", "NameRus": "КАЛИЙ", "NameLat": "K" },
    { "elementNumber": "20", "NameRus": "КАЛЬЦИЙ", "NameLat": "Ca" },
    { "elementNumber": "21", "NameRus": "СКАНДИЙ", "NameLat": "Sc" },
    { "elementNumber": "22", "NameRus": "ТИТАН", "NameLat": "Ti" },
    { "elementNumber": "23", "NameRus": "ВАНАДИЙ", "NameLat": "V" },
    { "elementNumber": "24", "NameRus": "ХРОМ", "NameLat": "Cr" },
    { "elementNumber": "25", "NameRus": "МАРГАНЕЦ", "NameLat": "Mn" },
    { "elementNumber": "26", "NameRus": "ЖЕЛЕЗО", "NameLat": "Fe" },
    { "elementNumber": "27", "NameRus": "КОБАЛЬТ", "NameLat": "Co" },
    { "elementNumber": "28", "NameRus": "НИКЕЛЬ", "NameLat": "Ni" },
    { "elementNumber": "29", "NameRus": "МЕДЬ", "NameLat": "Cu" },
    { "elementNumber": "30", "NameRus": "ЦИНК", "NameLat": "Zn" },
    { "elementNumber": "31", "NameRus": "ГАЛЛИЙ", "NameLat": "Ga" },
    { "elementNumber": "32", "NameRus": "ГЕРМАНИЙ", "NameLat": "Ge" },
    { "elementNumber": "33", "NameRus": "МЫШЬЯК", "NameLat": "As" },
    { "elementNumber": "34", "NameRus": "СЕЛЕН", "NameLat": "Se" },
    { "elementNumber": "35", "NameRus": "БРОМ", "NameLat": "Br" },
    { "elementNumber": "36", "NameRus": "КРИПТОН", "NameLat": "Cr" },
    { "elementNumber": "37", "NameRus": "РУБИДИЙ", "NameLat": "Rb" },
    { "elementNumber": "38", "NameRus": "СТРОНЦИЙ", "NameLat": "Sr" },
    { "elementNumber": "39", "NameRus": "ИТТРИЙ", "NameLat": "Y" },
    { "elementNumber": "40", "NameRus": "ЦИРКОНИЙ", "NameLat": "Zr" },
    { "elementNumber": "41", "NameRus": "НИОБИЙ", "NameLat": "Nb" },
    { "elementNumber": "42", "NameRus": "МОЛИБДЕН", "NameLat": "Mo" },
    { "elementNumber": "43", "NameRus": "ТЕХНЕЦИЙ", "NameLat": "Tc" },
    { "elementNumber": "44", "NameRus": "РУТЕНИЙ", "NameLat": "Ru" },
    { "elementNumber": "45", "NameRus": "РОДИЙ", "NameLat": "Rh" },
    { "elementNumber": "46", "NameRus": "ПАЛЛАДИЙ", "NameLat": "Pd" },
    { "elementNumber": "47", "NameRus": "СЕРЕБРО", "NameLat": "Ag" },
    { "elementNumber": "48", "NameRus": "КАДМИЙ", "NameLat": "Cd" },
    { "elementNumber": "49", "NameRus": "ИНДИЙ", "NameLat": "In" },
    { "elementNumber": "50", "NameRus": "ОЛОВО", "NameLat": "Sn" },
    { "elementNumber": "51", "NameRus": "СУРЬМА", "NameLat": "Sb" },
    { "elementNumber": "52", "NameRus": "ТЕЛЛУР", "NameLat": "Te" },
    { "elementNumber": "53", "NameRus": "ЙОД", "NameLat": "I" },
    { "elementNumber": "54", "NameRus": "КСЕНОН", "NameLat": "Xe" },
    { "elementNumber": "55", "NameRus": "ЦЕЗИЙ", "NameLat": "Cs" },
    { "elementNumber": "56", "NameRus": "БАРИЙ", "NameLat": "Ba" },
    { "elementNumber": "57", "NameRus": "ЛАНТАН", "NameLat": "La" },
    { "elementNumber": "58", "NameRus": "ЦЕРИЙ", "NameLat": "Ce" },
    { "elementNumber": "59", "NameRus": "ПРАЗЕОДИМ", "NameLat": "Pr" },
    { "elementNumber": "60", "NameRus": "НЕОДИМ", "NameLat": "Nd" },
    { "elementNumber": "61", "NameRus": "ПРОМЕТИЙ", "NameLat": "Pm" },
    { "elementNumber": "62", "NameRus": "САМАРИЙ", "NameLat": "Sm" },
    { "elementNumber": "63", "NameRus": "ЕВРОПИЙ", "NameLat": "Eu" },
    { "elementNumber": "64", "NameRus": "ГАДОЛИНИЙ", "NameLat": "Gd" },
    { "elementNumber": "65", "NameRus": "ТЕРБИЙ", "NameLat": "Tb" },
    { "elementNumber": "66", "NameRus": "ДИСПРОЗИЙ", "NameLat": "Dy" },
    { "elementNumber": "67", "NameRus": "ГОЛЬМИЙ", "NameLat": "Ho" },
    { "elementNumber": "68", "NameRus": "ЭРБИЙ", "NameLat": "Er" },
    { "elementNumber": "69", "NameRus": "ТУЛИЙ", "NameLat": "Tm" },
    { "elementNumber": "70", "NameRus": "ИТТЕРБИЙ", "NameLat": "Yb" },
    { "elementNumber": "71", "NameRus": "ЛЮТЕЦИЙ", "NameLat": "Lu" },
    { "elementNumber": "72", "NameRus": "ГАФНИЙ", "NameLat": "Hf" },
    { "elementNumber": "73", "NameRus": "ТАНТАЛ", "NameLat": "Ta" },
    { "elementNumber": "74", "NameRus": "ВОЛЬФРАМ", "NameLat": "W" },
    { "elementNumber": "75", "NameRus": "РЕНИЙ", "NameLat": "Re" },
    { "elementNumber": "76", "NameRus": "ОСМИЙ", "NameLat": "Os" },
    { "elementNumber": "77", "NameRus": "ИРИДИЙ", "NameLat": "Ir" },
    { "elementNumber": "78", "NameRus": "ПЛАТИНА", "NameLat": "Pt" },
    { "elementNumber": "79", "NameRus": "ЗОЛОТО", "NameLat": "Au" },
    { "elementNumber": "80", "NameRus": "РТУТЬ", "NameLat": "Hg" },
    { "elementNumber": "81", "NameRus": "ТАЛЛИЙ", "NameLat": "Tl" },
    { "elementNumber": "82", "NameRus": "СВИНЕЦ", "NameLat": "Pb" },
    { "elementNumber": "83", "NameRus": "ВИСМУТ", "NameLat": "Bi" },
    { "elementNumber": "84", "NameRus": "ПОЛОНИЙ", "NameLat": "Po" },
    { "elementNumber": "85", "NameRus": "АСТАТ", "NameLat": "At" },
    { "elementNumber": "86", "NameRus": "РАДОН", "NameLat": "Rn" },
    { "elementNumber": "87", "NameRus": "ФРАНЦИЙ", "NameLat": "Fr" },
    { "elementNumber": "88", "NameRus": "РАДИЙ", "NameLat": "Ra" },
    { "elementNumber": "89", "NameRus": "АКТИНИЙ", "NameLat": "Ac" },
    { "elementNumber": "90", "NameRus": "ТОРИЙ", "NameLat": "Th" },
    { "elementNumber": "91", "NameRus": "ПРОТАКТИНИЙ", "NameLat": "Pa" },
    { "elementNumber": "92", "NameRus": "УРАН", "NameLat": "U" },
    { "elementNumber": "93", "NameRus": "НЕПТУНИЙ", "NameLat": "Np" },
    { "elementNumber": "94", "NameRus": "ПЛУТОНИЙ", "NameLat": "Pu" },
    { "elementNumber": "95", "NameRus": "АМЕРИЦИЙ", "NameLat": "Am" },
    { "elementNumber": "96", "NameRus": "КЮРИЙ", "NameLat": "Cm" },
    { "elementNumber": "97", "NameRus": "БЕРКЛИЙ", "NameLat": "Bk" },
    { "elementNumber": "98", "NameRus": "КАЛИФОРНИЙ", "NameLat": "Cf" },
    { "elementNumber": "99", "NameRus": "ЭЙНШТЕЙНИЙ", "NameLat": "Es" },
    { "elementNumber": "100", "NameRus": "ФЕРМИЙ", "NameLat": "Fm" },
    { "elementNumber": "101", "NameRus": "МЕНДЕЛЕВИЙ", "NameLat": "Md" },
    { "elementNumber": "102", "NameRus": "НОБЕЛИЙ", "NameLat": "No" },
    { "elementNumber": "103", "NameRus": "ЛОУРЕНСИЙ", "NameLat": "Lr" },
    { "elementNumber": "104", "NameRus": "РЕЗЕРФОРДИЙ", "NameLat": "Rf" },
    { "elementNumber": "105", "NameRus": "ДУБНИЙ", "NameLat": "Db" },
    { "elementNumber": "106", "NameRus": "СИБОРГИЙ", "NameLat": "Sg" },
    { "elementNumber": "107", "NameRus": "БОРИЙ", "NameLat": "Bh" },
    { "elementNumber": "108", "NameRus": "ХАССИЙ", "NameLat": "Hs" },
    { "elementNumber": "109", "NameRus": "МЕЙТНЕРИЙ", "NameLat": "Mt" },
    { "elementNumber": "110", "NameRus": "ДАРМШТАДТИЙ", "NameLat": "Ds" },
    { "elementNumber": "111", "NameRus": "РЕНТГЕНИЙ", "NameLat": "Rg" },
    { "elementNumber": "112", "NameRus": "КОПЕРНИЦИЙ", "NameLat": "Cn" }
];
