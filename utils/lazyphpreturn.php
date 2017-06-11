

<?php
	/*
		Meetup Script PHP5 Part
	    Copyright (C) 2017  Joseph Acevedo

	    This program is free software: you can redistribute it and/or modify
	    it under the terms of the GNU General Public License as published by
	    the Free Software Foundation, either version 3 of the License, or
	    (at your option) any later version.

	    This program is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.

	    You should have received a copy of the GNU General Public License
	    along with this program.  If not, see <http://www.gnu.org/licenses/>.
	*/

	/*
		Personal Note, I have absolutely no recolection on how PHP actually works.
		I'm just lazy and I don't want to have to come up with some callback hell just to get a pure JS implementation working.
		Also note that this solution requires the presence of the 
		PHP cURL library, which SHOULD be on your system, but if not,
		install the package or contact your SysAdmin.

		To clarify, most of the heavy lifting involving the request takes place before and after the scope of this script on the
		client's device. The sole purpose of this is a stop-gap to contact the server.
	*/

	function spliceTwice(){
		$returnArr = [];
		foreach($_POST as $key => $val){
			if(strpos($key, 'url') == 0){
				$returnString[] = $key."=".$val;
			}
		}
		return join('&',$returnArr);
	}
	

	$url = $_POST['url'].spliceTwice();
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL, $url);
	$result = curl_exec($ch);

	print($result);
?>