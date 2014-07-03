<?php
    // Config
    header('application/json');
    require('function.inc.php');
    $nbQuestion = 10;
    
    // Loading data
    $data = parse_csv("bddRatp.csv");
    
    // Preparing return
    $result = array(
        "status" => 0,
        "message" => "Error : Something went wrong",
        "data" => array(),
    );
    // Prepare question and possible answers
    $question = $data[array_rand($data,1)];
    $answer = array_rand($data,2);
    $answer[] = $data[$answer[0]];
    $answer[] = $data[$answer[1]];
    $answer[] = $question;
        
    if(!empty($_GET) && !empty($_GET['answer']) && !empty($_GET['question'])){
        $questionId = htmlspecialchars($_GET['question']);
        $answerId = htmlspecialchars($_GET['answer']);
        if( true ){ // TODO
            $result['data'] = array(
                'question' => $questionId,
                'answer' => $answerId,
                'correction' => true // Todo correction
            );
            
            $result['status'] = 1;
            $result['message'] = "Answer received, here is the result.";
        }
        else {
            $result['data'] = array(
                'correction' => true // Todo correction
            );
            $result['status'] = 2;
            $result['message'] = "No more question.";
        }
        echo json_encode($result);
    }
    else {
        
        $result['data'] = array(
            'question' => 1, 
            'intitule' => $question, // Random selected
            'answer' => $answer
        );
        
        $result['status'] = 1;
        $result['message'] = "Sending the first question of the quizz.";
        echo json_encode($result);
    }

?>