<?php
echo "Hi, there. Care to tell me your name?";
$_SET readline(">>");

function show_user_name($_SET) {
   while($_SET){
     echo "Username: $_SET";
  };
};

};
?>
