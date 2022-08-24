app.controller('controller', function($scope) {

   /*  $scope.fname;
    $scope.mname;
    $scope.lname;
    $scope.birth;
    $scope.death; */

    $scope.mainhidden = false
    $scope.datahidden = true
    $scope.peoplehidden = true
    $scope.peoplemenuhidden = true

    $scope.btnData = function(){
        $scope.mainhidden = true
        $scope.datahidden = false
    }

    $scope.MainMenu = function(){
        $scope.mainhidden = false
        $scope.datahidden = true
        $scope.peoplehidden = true
        $scope.peoplemenuhidden = true
    }

    $scope.btnPeople = function(){
        $scope.datahidden = true
        $scope.peoplehidden = false
    }

    $scope.btnNewPerson = function(){
        $scope.peoplemenuhidden = false
        $scope.peoplehidden = true
    }
    ;
    ;
    
    
    
    $scope.NewPerson = {
        meta:{
            fname:"",
            mname:"",
            lname:"",
            birth:"",
            death:""
        },
        submit:function(){
            $scope.NewPerson.meta.fname = $scope.fname
            $scope.NewPerson.meta.mname = $scope.mname
            $scope.NewPerson.meta.lname = $scope.lname
            $scope.NewPerson.meta.birth = $scope.birth
            $scope.NewPerson.meta.death = $scope.death
        }
    }

})

