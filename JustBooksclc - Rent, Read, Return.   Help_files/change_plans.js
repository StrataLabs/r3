$(document).ready(function(){
  $("form#new_change_plan select#change_plan_new_plan_id").change(function(){
      var planId = $(this).val();    
      if(planId)
        window.location.href = "/accounts/change_plan/" + $("#change_plan_membership_no").val() + "/?new_plan_id=" + planId;    
      return false;
  });
    
  $(".change_plan_terms").change(function(){
      updateAmounts($(this));
  });
  
  $("input:radio[name=delivery_option]").change(function(){
    updateAmounts($('.change_plan_terms:checked'));
  });

  var updateAmounts = function(selectedTerm){
    try{
      var selected_term = selectedTerm.val();
      var term_detail = chosen_plan_durations[selected_term];
      var delivery_fees = 0;
      var delivery_fee_amt = 0;
      var delivery_option = $("input:radio[name=delivery_option]:checked").val();
      var delivery_fee_discount = $('#delivery_fee_discount_'+selected_term).val();
      var delivery_fee_left = $('#delivery_fee_left').val();
      var delivery_fee_discount_left = $('#delivery_fee_discount_left').val();

      if (delivery_option == 1){
          delivery_fees = $('#delivery_fee_'+selected_term).val();
          $("#delivery_fee_section").show();
          if (delivery_fee_discount > 0){
            delivery_fee_amt = delivery_fees;
            delivery_fees = delivery_fees - delivery_fee_left;
            $("span#delivery_fee_discount i").html("(You save " + delivery_fee_discount + ")");
          }else{
            delivery_fee_amt = delivery_fees;
            delivery_fees = delivery_fees - delivery_fee_left - delivery_fee_discount_left;
            $("span#delivery_fee_discount i").empty();
          }
      }else{
          delivery_fees = 0;
          delivery_fee_amt = delivery_fees;
          $("#delivery_fee_section").hide();
      }
      $('#delivery_fee_selected').text(delivery_fees);
      $("input[name=delivery_fee_amt]").val(delivery_fee_amt);
      $("#amount_payable_selected").text(parseFloat(term_detail["payable_amount"]));
      var total_payable_amt = parseFloat(term_detail["payable_amount"]) + parseFloat(delivery_fees);
      $('#total_payable').text(total_payable_amt);
      if($('#plan_frequency').val() != "M" ){
          $("#delivery_select").hide();
          $("#delivery_fee_section").hide();
      }
      if(parseFloat(total_payable_amt) <= 0){
        $('#change_plan_refund_message').show();
        $('#change_plan_button_div').hide();
      }else{
        $('#change_plan_refund_message').hide();
        $('#change_plan_button_div').show();
      }
    }catch(err){}
  }
    
  updateAmounts($('.change_plan_terms:checked'));
});
