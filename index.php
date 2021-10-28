<?php
echo "Hi, there. Care to tell me your name?";
$username readline(">>");

function show_user_name($username) {
   while($username){
     echo "Username: $username";
  };
};

};
?>
