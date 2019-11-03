var sample = new Vue({
	el: '#list' ,
	data : {
		list : [],
		pagination : ''
	},
    methods:{        
    	 initialize: function() {
    	    	var self = this;
    	    	self.init = true;
    	    	axios.get('/board/data?page=0')
                .then(function(response){
                	//console.log(response);
                	self.list = response.data.list.content;
                	self.pagination = response.data.pagination;
                    console.log(self.pagination);
                });
    	        self.init = false;    		
    	},
    	getData: function(){
           axios.get('/board?page=0')
          .then(function(response){
              console.log(response.data); // 객체 형태로 반환. 파싱작업 불필요
          });
        }
      },mounted: function() {
    	    var self = this;
    	    // 초기화 로직
    	    // 모든 화면이 렌더링된 후 실행합니다.
    	    this.$nextTick(function() {     	    
    	      self.initialize();
    	    });
      }
});