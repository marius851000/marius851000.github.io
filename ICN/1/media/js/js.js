var textt = `<div class="sommaire">
			<ul>
				<li class="expandable"><span class="subH1"><a href="presentation.html">présentation</a></span></li>
				<li class="expandable">
					<span class="subH1"><a href="physique.html">Partie physique</a></span>
					<ul>
					<li><span class="subH2"><a href="physique.html#relier_des_ordinateur_entre_eux">Reliez des ordinateurs entre eux</a></span>
						<ul>
						<li><span class="subH3"><a href="physique.html#les_cables">Les cables</a></span>
							<ul>
							<li><span class="subH4"><a href="physique.html#Les_cables_coaxiaux_simple">Les cables coaxiaux simples</a></span></li>
							<li><span class="subH4"><a href="physique.html#les_cables_coaxiaux_croisee">Les cables coaxiaux croisée</a></span></li>
							</ul>
						</li>
						<li><span class="subH3"><a href="physique.html#La_WIFI">La WIFI</a></span></li>
						</ul>
					</li>
					<li><span class="subH2"><a href="physique.html#La_connection">La connection</a></span>
						<ul>
						<li><span class="subH3"><a href="physique.html#switch">Le switch</a></span></li>
						<li><span class="subH3"><a href="physique.html#hub">Le Hub</a></span></li>
						</ul>
					</li>
					</ul>
				</li>
				<li class="expandable">
					<span class="subH1"><a href="logiciel.html#partie_logiciel">Partie logiciel</a></span>
					<ul>
					<li><span class="subH2"><a href="logiciel.html#MAC">L'adresse MAC</a></span></li>
					<li><span class="subH2"><a href="logiciel.html#COMM">La communication</a></span></li>
					</ul>
				</li>
			</ul>
		</div><a href="#">`

$(document).ready(function(){
	$(".expandable").hover(
	function() {
		$(".subH1", this).css("font-size", "140%");
		$(this).parent().parent().css("background-color","white")
		$(this).css("background-color","#e6e6e6")
	}, function() {
		$(".subH1", this).css("font-size", "200%");
		$(this).parent().parent().css("background-color","#e6e6e6")
		$(this).parent().children().css("background-color","white")
		$(this).scrollTop(0);
	});
	$(".m").hover(
	function() {
		$(this).html(`réseau</a><div style="position:fixed">` + textt + "</div>");
	}, function() {
		$(this).text("réseau");
	});
});
