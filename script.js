document.getElementById('generate').addEventListener('click', play_game);
    function play_game()
    {
        let computer_point_generate = parseInt(Math.random() * 10);
        let user_point_generate = parseInt(Math.random() * 10);
        document.getElementById('generate_count_user').innerText = computer_point_generate ;
        document.getElementById('generate_count_computer').innerText = user_point_generate;


        if((Number(document.getElementById('computer_point').textContent) == 3)||(Number(document.getElementById('user_point').textContent) == 3))
        {
            if (Number(document.getElementById('computer_point').textContent) > Number(document.getElementById('user_point').textContent))
            {
                alert("Ви програли( Спробуйте ще!")
                document.getElementById('generate_count_user').innerText = 0 ;
                document.getElementById('generate_count_computer').innerText = 0;
                document.getElementById('computer_point').innerText = 0;
                document.getElementById('user_point').innerText = 0;
            } else
            {
                alert("Ви отримали перемогу))")
                document.getElementById('generate_count_user').innerText = 0 ;
                document.getElementById('generate_count_computer').innerText = 0;
                document.getElementById('computer_point').innerText = 0;
                document.getElementById('user_point').innerText = 0;
            }
        }
        if(computer_point_generate>user_point_generate)
      {
          document.getElementById('computer_point').innerText = Number(document.getElementById('computer_point').textContent)+1;
      }
      else
      {
          document.getElementById('user_point').innerText = Number(document.getElementById('user_point').textContent)+1;
      }
    }
