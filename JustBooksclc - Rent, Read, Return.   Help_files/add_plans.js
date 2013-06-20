$(document).ready(function(){
  $("input[name='payment_type']:checked").live('click', function(){
    var payment_type = $(this).val();
    update_add_plan_amounts(new String(payment_type));
  });
  
  function add_plan_label_cleanup(){
    $('#add_plan_convenience_fee').empty();
    $('#add_plan_total').empty();
  }
  
  function update_add_plan_amounts(payment_type){
    plan_obj = plan_duration.plan_duration
    add_plan_label_cleanup();
    if(payment_type == 'card'){
      $('#convenience_fee').val(plan_obj.convenience_fee);
      $('#add_plan_convenience_fee').append(plan_obj.convenience_fee);
      $('#payable_amount').val(plan_obj.totalAmount_with_convenience_fee);
      $('#add_plan_total').append(plan_obj.totalAmount_with_convenience_fee);
    }else{
      $('#convenience_fee').val(0);
      $('#add_plan_convenience_fee').append(0);
      $('#payable_amount').val(plan_obj.totalAmount);
      $('#add_plan_total').append(plan_obj.totalAmount);
    }
  }
});
