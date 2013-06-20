$(document).ready(function(){
  $("input[name='renewal_payment_type']:checked").change();
    
  $("input[name='renewal_payment_type']:checked").live('click', function(){
    var payment_type = $(this).val();
    update_renewal_amounts(new String(payment_type));
  });
  
  function renewal_label_cleanup(){
    $('#renewal_convenience_fee').empty();
    $('#renewal_total').empty();
  }
  
  function update_renewal_amounts(payment_type){
    renewal_obj = renewal.renewal
    renewal_label_cleanup();
    if(payment_type == 'card'){
      $('#convenience_fee').val(renewal_obj.convenience_fee);
      $('#renewal_convenience_fee').append(renewal_obj.convenience_fee);
      $('#payable_amount').val(renewal_obj.total_payable_amt_with_convenience_fee);
      $('#renewal_total').append(renewal_obj.total_payable_amt_with_convenience_fee);
    }else{
      $('#convenience_fee').val(0);
      $('#renewal_convenience_fee').append(0);
      $('#payable_amount').val(renewal_obj.total_payable_amt);
      $('#renewal_total').append(renewal_obj.total_payable_amt);
    }
  }
  
  $("#member_cards_switch_div a").live('click',function(){
    $('.loading').show();
  })
});
