class DownloadController < ApplicationController
	def resume
	  send_data pdf,
	    :filename => "RESUME.pdf",
	    :type => "application/pdf"
	end
end
