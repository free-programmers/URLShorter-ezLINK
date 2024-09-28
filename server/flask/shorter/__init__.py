from flask_smorest import Blueprint

blp = Blueprint("url-shorter", "url-shorter", description="Operations on links and alias links")


import shorter.views
import shorter.models