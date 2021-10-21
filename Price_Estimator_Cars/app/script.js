function solicitareMarca()
	{
		adresa="http://localhost:4000/brands?callback=?"
		$.getJSON(adresa, function(raspuns)
		{
			$("#marca").empty();
			$.each(raspuns, function(indice, brands)
			{
				var o = new Option(brands.name, brands.id);
				console.log(o);
				$("#marca").append(o);
			}
			)
		}
		)
	};

	function solicitareModel(id)
	{
		adresa="http://localhost:4000/models?brand_id="+id.value+"&callback=?";
		$.getJSON(adresa, function(raspuns)
		{
			$("#model").empty();
			$.each(raspuns, function(indice, models)
			{
				var o = new Option(models.name, models.id);
				console.log(o);
				$("#model").append(o);
			})
		})
	};

	function solicitareAn(id)
	{
		adresa="http://localhost:4000/years?model_id="+id.value+"&callback=?";
		$.getJSON(adresa, function(raspuns)
		{
			$("#anfab").empty();
			$.each(raspuns, function(indice, years)
			{
				var o = new Option(years.name, years.id);
				console.log(o);
				$("#anfab").append(o);
			})
		})
	};

	function solicitareTransmisie(id)
	{
		adresa="http://localhost:4000/transmisions?year_id="+id.value+"&callback=?";
		$.getJSON(adresa, function(raspuns)
		{
			$("#transmisie").empty();
			$.each(raspuns, function(indice, transmisions)
			{
				var o = new Option(transmisions.name, transmisions.id);
				console.log(o);
				$("#transmisie").append(o);
			})
		})
	};

	function solicitareCombustibil(id)
	{
		adresa="http://localhost:4000/fuels?transmision_id="+id.value+"&callback=?";
		$.getJSON(adresa,function(raspuns)
		{
			$("#combustibil").empty();
			$.each(raspuns, function(indice, fules)
			{						
				var o = new Option(fules.name, fules.id);
				console.log(o);
				$("#combustibil").append(o);				
			})
			
		})
	};

	function solicitareKm(id)
	{
		adresa="http://localhost:4000/kms?fuel_id="+id.value+"&callback=?";
		$.getJSON(adresa,function(raspuns)
		{
			$("#nrkm").empty();
			$.each(raspuns, function(indice, kms)
			{
				var o = new Option(kms.name, kms.id);
				console.log(o);
				$("#nrkm").append(o);
			})
			
		})
	};

	function solicitarePret(id)
	{
		adresa="http://localhost:4000/prices?km_id="+id.value+"&callback=?";
		$.getJSON(adresa,function(raspuns)
		{
			$.each(raspuns, function(indice, prices)
			{
				$(".form").hide();
				$("#h2").hide();
				home = '<a href="paginaprin.php"><button type="button" class="home-btn"><i class="fas fa-home"></i></button></a>';
				intpret = '<h2 style="text-align: center; margin-top: 50px;">Intervalul de preț estimat este:</h2><div class="intervalPret"><h1><option  id="intervaldepret" value="'+prices.name+'">'+prices.name+'</option></h1></div><br>';
				vrapid = '<button type="button" class="submit-form" style="margin-left: 40%;" onclick="pretVR()">Deți acest vehicul și dorești să îl vinzi rapid? Click aici !</button>';
				atentionare = '<div style="text-align: center; margin-top: 33px;"><p style="color: rgb(102, 102, 102);">Vânzarea rapidă presupune acceptarea unui preț mai mic decât cel afișat cu aproximativ 25-30%!</p></div>';
				$(home).appendTo('.log-reg')
				$(intpret).appendTo(".calc-box");
				$(vrapid).appendTo(".calc-box");
				$(atentionare).appendTo(".calc-box");
			})
			
		})
	};

	function pretVR(){
		
			if(($("#marca").val() == "")||($("#model").val() == "")||($("#anfab").val() == "")||($("#transmisie").val() == "")||($("#cumbustibil").val() == "")||($("#nrkm").val() == "")||($("#nrkm").val() == "")){
				alert("Atenție, toate datele să fie completate!");
			}
			else
			{
				var marca = $("#marca").val();
				var model = $("#model").val();
				var anfab = $("#anfab").val();
				var transmisie = $("#transmisie").val();
				var combustibil = $("#combustibil").val();
				var nrkm = $("#nrkm").val();
				var intervaldepret = $("#intervaldepret").val();
	
				$.ajax({
					method : "POST",
					url : "http://localhost:3000/cars",
					contentType: "application/json",
					data :JSON.stringify({
						marca : marca,
						model : model,
						anfab : anfab,
						transmisie : transmisie,
						combustibil : combustibil,
						nrkm : nrkm,
						intervaldepret : intervaldepret,
					}),
					dataType: "json",
					 success : function(data) {
						successmessage = 'Data was succesfully captured';} 
				});
				alert("Vehicul adăugat cu succes pe lista de vânzare rapidă!");
			};
	};

	function listaVR()
	{
		adresa="http://localhost:3000/cars"
		$.getJSON(adresa, function(raspuns)
		{
			$.each(raspuns, function(indice, cars)
			{
				if(cars.marca == 'audi'){
					var a = "Audi";
					if(cars.model == 'a4'){
						var b = "A4";
						if(cars.anfab == 'a42000–2006'){
							var c = "2000 – 2006";
							if(cars.transmisie == 'a42000–2006manuala'){
								var d = "Manuală";
								if(cars.combustibil == 'a42000–2006manualamotorina'){
									var e ="Motorină";
									if(cars.nrkm == 'a42000–2006manualamotorina150'){
										var f = "0 - 150.000";
										if(cars.intervaldepret == '2000-3000€'){
											var g = "1500 - 2250€";
										}
									}
									else if(cars.nrkm == 'a42000–2006manualamotorina300'){
										var f = "150.000 - 300.000";
										if (cars.intervaldepret == '1800-2600€'){
											var g = "1350 - 1950€";
										}
									}
									else{
										var f = "300.000+";
										if (cars.intervaldepret == '1500-2400€'){
											var g = "1125 - 1800€";
										}
									}
								}
								else{
									var e = "Benzină";
									if(cars.nrkm == 'a42000–2006manualabenzina150'){
										var f = "0 - 150.000";
										if(cars.intervaldepret == '1900-2800€'){
											var g = "1425 - 2100€"
										}
									}
									else if (cars.nrkm == 'a42000–2006manualabenzina300'){
										var f = "150.000 - 300.000";
										if(cars.intervaldepret == '1700-2500€'){
											var g = "1275 - 1875€"
										}
									}
									else{
										var f = "300.000+";
										if(cars.intervaldepret == '1400-2200€'){
											var g = "1050 - 1650€"
										}
									}
								}
							}
							else{
								var d = "Automată";
								if(cars.combustibil == 'a42000–2006automatamotorina'){
									var e ="Motorină";
									if(cars.nrkm == 'a42000–2006automatamotorina150'){
										var f = "0 - 150.000";
										if(cars.intervaldepret == '2100-3100€'){
											var g = "1575 - 2325€";
										}
									}
									else if(cars.nrkm == 'a42000–2006automatamotorina300'){
										var f = "150.000 - 300.000";
										if(cars.intervaldepret == '1900-2700€'){
											var g = "1425 - 2025€";
										}
									}
									else{
										var f = "300.000+";
										if(cars.intervaldepret == '1600-2500€'){
											var g = "1200 - 1875€";
										}
									}
								}
								else{
									var e ="Benzinnă";
									if(cars.nrkm == 'a42000–2006automatabenzina150'){
										var f = "0 - 150.000";
										if(cars.intervaldepret == '2000-3000€'){
											var g = "1500 - 2250€";
										}
									}
									else if(cars.nrkm == 'a42000–2006automatabenzina300'){
										var f = "150.000 - 300.000";
										if(cars.intervaldepret == '1800-2600€'){
											var g = "1350 - 1950€";
										}
									}
									else{
										var f = "300.000+";
										if(cars.intervaldepret == '1500-2400€'){
											var g = "1125 - 1800€";
										}
									}
								}
							}
						}
					}
					else if(cars.model == 'a6'){
						var b = "A6";
					}
					else if(cars.model == 'a7'){
						var b = "A7";
					}
				}

				vehicul = '<div id="'+cars.id+'" class="cars"><h3>Marca: '+a+' | Modelul: '+b+' | Anul fabricației: '+c+'<br>Transmisia: '+d+' | Tipul de combustibil: '+e+' | Numărul de km: '+f+'<br><p style="color: red;">Prețul vânzării rapide: '+g+'</p><h3></div><br>';
				$(vehicul).appendTo('#listaVR');	
			}
			)
		}
		)
	};