app.controller('controller', function($scope) {

    $scope.selectedname = undefined
    $scope.message = "Error"

    function clear(){
        $scope.mainhidden = true
        $scope.datahidden = true
        $scope.peoplehidden = true
        $scope.peoplemenuhidden = true
        $scope.messagehidden = true
        $scope.edithidden = true
        $scope.editformhidden = true
    }

    clear()
    $scope.mainhidden = false

    $scope.btnData = function(){
        clear()
        $scope.datahidden = false
    }

    $scope.MainMenu = function(){
        clear()
        $scope.mainhidden = false
    }

    $scope.btnPeople = function(){
        clear()
        $scope.peoplehidden = false
    }

    $scope.btnEditPerson = function(){
        clear()
        $scope.edithidden = false
    }

    $scope.btnNewPerson = function(){
        clear()
        $scope.peoplemenuhidden = false
    }
    ;
    ;
    $scope.relationships = ["Sibling To","Parent To","Child To",""]
    var peopledata = [""]
    $scope.peoplereferencelist = [""]
    
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

            document.getElementById('input1').value = ''
            document.getElementById('input2').value = ''
            document.getElementById('input3').value = ''
            document.getElementById('input4').value = ''
            document.getElementById('input5').value = ''

            peopledata.push($scope.NewPerson.meta)
            console.log($scope.NewPerson.meta.lname + ", " + $scope.NewPerson.meta.fname)
            $scope.peoplereferencelist.push([$scope.NewPerson.meta.lname,$scope.NewPerson.meta.fname,$scope.NewPerson.meta.mname])
            console.log($scope.peoplereferencelist)
            
            clear()
            $scope.message = "Successfully Added"
            $scope.messagehidden = false
            
        }
    }

    $scope.SelectEdit = function(){
        if($scope.selectedname != undefined){
            clear()
            $scope.editformhidden = false
        }


    }
    

})

