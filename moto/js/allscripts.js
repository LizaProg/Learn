$.fx.speeds._default = 1000;

$(document).ready(function() { 
    
//�������
/*
$('#small a').click(function(eventObject) {
    if ($('#big img').attr('src') != $(this).attr('href')) {
    
    $('#big img').hide().attr('src',$(this).attr('href'));
    $('#big img').load(function() {
        $(this).fadeIn(2000);
    });
    }
    eventObject.preventDefault();
});

$('#switchGal').toggle(function() {
$('#gallery').slideDown(2000);
},
function() {
$('#gallery').slideUp(2000);
});

$('#small a img').click(function() {
    $('#small a img').fadeTo(1000,1);
    $(this).fadeTo(1000, 0.6);
});
*/

//�������� email ������ ������������
var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
var myEmail = $('#email');

myEmail.focus(function(){
    if ($(this).val() == $(this).attr('defaultValue')) {
    $(this).val('');
    }

});

myEmail.blur(function(){
    var userEmail = $(this).val();
    
    if (userEmail == '') {
    $(this).val($(this).attr('defaultValue')).css('border','1px solid #cccccc');
    }
    
    else if (userEmail.search(regV) == -1) {
    $(this).css('border','1px solid #cc0000');   
    }
    else {
    $(this).css('border','1px solid #00cc00');    
    }
    

});

//���������� ������ ��������

$('#my_button').click(function(eventObject) {
var myDate = $('#date');
if (myDate.val() == '') {
    myDate.css('background-color','#cc0000').effect('pulsate').effect('shake', function() {
        myDate.css('background-color','#f6f6f6')
    });
}


    $(this).attr('disabled','disabled');
    $(this).attr('value','���������...');
  eventObject.preventDefault();
    
});

//����������
$("#date").datepicker({
			changeMonth: true,
			changeYear: true
		});
                
//����������� ���������
$.datepicker.regional['ru'] = {
		closeText: '�������',
		prevText: '&#x3c;����',
		nextText: '����&#x3e;',
		currentText: '�������',
		monthNames: ['������','�������','����','������','���','����',
		'����','������','��������','�������','������','�������'],
		monthNamesShort: ['���','���','���','���','���','���',
		'���','���','���','���','���','���'],
		dayNames: ['�����������','�����������','�������','�����','�������','�������','�������'],
		dayNamesShort: ['���','���','���','���','���','���','���'],
		dayNamesMin: ['��','��','��','��','��','��','��'],
		weekHeader: '��',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
    
//��� ��������
$("#slider-range").slider({
			range: true,
			min: 10,
			max: 1000,
			values: [50, 400],
			slide: function(event, ui) {
				$("#amount").val(ui.values[0] + ' - ' + ui.values[1] + ' ��');
			}
		});
		$("#amount").val($("#slider-range").slider("values", 0) + ' - ' + $("#slider-range").slider("values", 1) + ' ��');

//��� ����������� ����
$('#dialog').dialog({
			autoOpen: false,
			show: 'blind',
			hide: 'explode'
		});
		
		$('#help').click(function() {
			$('#dialog').dialog('open');
			return false;
		});


//������ ������

$("input:submit").button();

//������ ������ Tabs

$("#tabs").tabs();

//������ ������� ���������
$("#accordion").accordion();

//������ ������� ���������
$("#progressbar").progressbar({
			value: 0
		});
        
$('#opros :radio').change(function() {
    
    var chRadio = $('#opros :radio:checked').size();
    $("#progressbar").progressbar({
			value: chRadio * 20
		});
    var questCount = $('#opros div[id*=radio]').size();    
     $('#aswerCount').text('���� ������� ' + chRadio + ' �� ' + questCount);   
        
});

$('#opros').load(function() {
    
    var chRadio = $('#opros :radio:checked').size();
    $("#progressbar").progressbar({
			value: chRadio * 20
		});
    var questCount = $('#opros div[id*=radio]').size();    
     $('#aswerCount').text('���� ������� ' + chRadio + ' �� ' + questCount);   
        
});

//������ ������� ��������������
var availableTags = ["������������", "�������������", "�����������", "�����������"];
		$("#tags").autocomplete({
			source: availableTags
		});

//������ ��������������
$('div[id*=helmet]').draggable({
    containment : '#bound',
    revert : 'invalid',
    helper: 'clone',
    cursor : 'move'
});


//�������
var helmetsCount = 0;
var summa = 0;

$('#mycart').droppable({
            accept: '#forHelmets div[id*=helmet]',
            activeClass: 'highlight',
            drop: function(event, ui) {
                helmetsCount++;
                if (helmetsCount > 0) {$('#myclear').show();}
                $('#helmetsCount strong').text(helmetsCount);
                            
				var helmet = $(ui.draggable);
                summa += parseInt(helmet.attr('title'));
                $('#helmetsSumm strong').text(summa);
                helmet.fadeOut(200, function() {
                    $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
                        'width' : '90',
                        'height' : '80'
                    },2000);
                });
			}
		});


$('#forHelmets').droppable({
     accept: '#mycart div[id*=helmet]',
     activeClass: 'highlight',
     drop: function(event, ui) {
                helmetsCount--;
                if (helmetsCount == 0) {$('#myclear').hide();}
                 $('#helmetsCount strong').text(helmetsCount);
				var helmet2 = $(ui.draggable);
                summa -= parseInt(helmet2.attr('title'));
                $('#helmetsSumm strong').text(summa);
                helmet2.fadeOut(200, function() {
                    $(this).appendTo('#forHelmets').fadeIn(1000).find('img').animate({
                        'width' : '180',
                        'height' : '160'
                    },2000);
                });
			}
});


//����������

$("#sortable").sortable({
			placeholder: 'ui-state-highlight'
		});
		$("#sortable").disableSelection();

//������� �����

$("#selectable").selectable();

//���������� �� ������� �������� 

$("#mytextarea").resizable({
			maxHeight: 250,
			maxWidth: 380,
			minHeight: 150,
			minWidth: 380
		});


//�������� ��������

$('#formHide').click(function() {
    $('#my_form').toggle('explode');
});

$('#formColor').toggle(function() {
  $('#bigform > fieldset').animate({
    'backgroundColor' : '#e9f0e7'
  }, 5000);
},
function() {
  $('#bigform > fieldset').animate({
    'backgroundColor' : '#e7e7f0'
  }, 5000);
});

$('#zoom').toggle(function() {
$('#tabs p').switchClass('forP', 'forP2', 2000);
},
function() {
$('#tabs p').switchClass('forP2', 'forP', 2000);
});








}); //����� ready