<?php>
$data = [
    ["artist_name"=> "Yaakov Shwekey","name"=>"LeDavid", "id"=>"kqzMDBdeQC0"],
    ["artist_name"=> "Yaakov Shwekey","name"=>"Misinai-Ba", "id"=>"hkBRhkbxR7s"],
    ["artist_name"=> "Yaakov Shwekey","name"=>"ALEPH BAIS GIMMEL", "id"=>"oE4SlAGEMeg"],
    ];
header('Content-Type: application/json');
echo json_encode($data);



